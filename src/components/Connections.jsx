import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addConnections } from "../utils/connectionsSlice";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Connections = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const connections = useSelector((state) => state.connections);

  const fetchConnections = async () => {
    try {
      setIsLoading(true);
      if (connections) return;

      const res = await axios.get(BASE_URL + "/user/connections", {
        withCredentials: true,
      });
      dispatch(addConnections(res?.data?.data));
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchConnections();
  }, []);

  if (isLoading) return (
    <div className="flex justify-center mt-20">
      <span className="loading loading-spinner loading-lg"></span>
    </div>
  );

  if (!connections) return;
  if (connections.length === 0) {
    return (
      <div className="flex justify-center my-10">
        <h1 className="text-3xl">No connections yet. Start swiping!</h1>
      </div>
    );
  }

  return (
    <div className="mt-10 mb-20 text-center">
      <h1 className="font-bold text-2xl">Connections</h1>
      {connections.map((connection) => {
        const { _id, firstName, lastName, photoUrl, age, gender, about } =
          connection;
        return (
          <div
            className="flex justify-between items-center rounded-lg bg-base-300 m-4 p-4 w-2/3 mx-auto"
            key={_id}
          >
            <img src={photoUrl} className="w-50 rounded-lg" alt="photo" />
            <div className="mx-5 text-left w-max">
              <h2 className="font-bold text-lg">
                {firstName + " " + lastName}
              </h2>
              {age && gender && <p>{age + ", " + gender}</p>}
              <p>{about}</p>
            </div>
            <div className="mx-5 w-max">
              <Link to={"/chat/" + _id}>
                <button className="btn btn-primary">Chat</button>
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Connections;
