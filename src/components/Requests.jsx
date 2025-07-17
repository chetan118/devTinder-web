import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addRequests } from "../utils/requestsSlice";
import { useEffect } from "react";

const Requests = () => {
  const dispatch = useDispatch();
  const requests = useSelector((state) => state.requests);

  const fetchRequests = async () => {
    try {
      if (requests) return;

      const res = await axios.get(BASE_URL + "/user/requests/received", {
        withCredentials: true,
      });
      console.log(res?.data?.data);
      dispatch(addRequests(res?.data?.data));
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  if (!requests) return;
  if (requests.length === 0) {
    return (
      <div className="flex justify-center my-10">
        <h1 className="text-3xl">No Requests Found</h1>
      </div>
    );
  }

  return (
    <div className="mt-10 mb-20 text-center">
      <h1 className="font-bold text-2xl">Pending Requests</h1>
      {requests.map((request) => {
        const { _id, firstName, lastName, photoUrl, age, gender, about } =
          request.fromUserId;
        return (
          <div
            className="flex justify-between items-center rounded-lg bg-base-300 m-4 p-4 w-2/3 mx-auto"
            key={_id}
          >
            <div>
              <img src={photoUrl} className="rounded-lg" alt="photo" />
            </div>
            <div className="mx-5 text-left w-max">
              <h2 className="font-bold text-lg">
                {firstName + " " + lastName}
              </h2>
              {age && gender && <p>{age + ", " + gender}</p>}
              <p>{about}</p>
            </div>
            <div>
              <button className="btn btn-active btn-primary m-2">Reject</button>
              <button className="btn btn-active btn-secondary m-2">
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
