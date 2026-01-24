import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addRequests, removeRequestById } from "../utils/requestsSlice";
import { useEffect, useState } from "react";
import ToastSuccessMessage from "./ToastSuccessMessage";
import { removeConnections } from "../utils/connectionsSlice";

const Requests = () => {
  const dispatch = useDispatch();
  const requests = useSelector((state) => state.requests);
  const [reviewRequestRes, setReviewRequestRes] = useState({
    success: false,
    message: "",
  });
  const [errorToast, setErrorToast] = useState({ success: false, message: "" });
  const [isLoading, setIsLoading] = useState(false);

  const reviewRequest = async (requestId, status) => {
    try {
      // removing the request from store before the api call to prevent multiple clicks
      dispatch(removeRequestById(requestId));
      const res = await axios.post(
        BASE_URL + "/request/review/" + status + "/" + requestId,
        {},
        { withCredentials: true }
      );
      setReviewRequestRes({
        success: true,
        message: res?.data?.message,
      });
      setTimeout(() => {
        setReviewRequestRes({
          success: false,
          message: "",
        });
      }, 3000);
      if (status === "accepted") {
        // need to fetch connections again on connections page when request is accepted
        dispatch(removeConnections());
      }
    } catch (err) {
      // on failure, adding all the requests back to the store
      dispatch(addRequests(requests));
      setErrorToast({ success: true, message: "Action failed. Please try again." });
      setTimeout(() => setErrorToast({ success: false, message: "" }), 3000);
    }
  };

  const fetchRequests = async () => {
    try {
      setIsLoading(true);
      if (requests) return;

      const res = await axios.get(BASE_URL + "/user/requests/received", {
        withCredentials: true,
      });
      dispatch(addRequests(res?.data?.data));
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  if (isLoading) return (
    <div className="flex justify-center mt-20">
      <span className="loading loading-spinner loading-lg"></span>
    </div>
  );

  if (!requests) return;
  if (requests.length === 0) {
    return (
      <div className="flex justify-center my-10">
        <ToastSuccessMessage result={reviewRequestRes} />
        <h1 className="text-3xl text-gray-500">No Requests Found</h1>
      </div>
    );
  }

  return (
    <div className="mt-10 mb-20 text-center">
      <ToastSuccessMessage result={reviewRequestRes} />
      <ToastSuccessMessage result={errorToast} type="error" />
      <h1 className="font-bold text-2xl">Pending Requests</h1>
      {requests.map((request) => {
        const { _id, firstName, lastName, photoUrl, age, gender, about } =
          request.fromUserId;
        return (
          <div
            className="flex justify-between items-center rounded-lg bg-base-300 m-4 p-4 w-2/3 mx-auto"
            key={request._id}
          >
            <div>
              <img src={photoUrl} className="rounded-lg" alt={firstName + " " + lastName} />
            </div>
            <div className="mx-5 text-left w-max">
              <h2 className="font-bold text-lg">
                {firstName + " " + lastName}
              </h2>
              {age && gender && <p>{age + ", " + gender}</p>}
              <p>{about}</p>
            </div>
            <div>
              <button
                className="btn btn-active btn-primary m-2"
                onClick={() => reviewRequest(request._id, "rejected")}
              >
                Reject
              </button>
              <button
                className="btn btn-active btn-secondary m-2"
                onClick={() => reviewRequest(request._id, "accepted")}
              >
                Accept
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Requests;
