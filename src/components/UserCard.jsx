import { useDispatch } from "react-redux";
import { removeUserFromFeed } from "../utils/feedSlice";
import axios from "axios";
import { BASE_URL } from "../utils/constants";

const UserCard = ({ user }) => {
  const { _id, firstName, lastName, photoUrl, age, gender, about, skills } = user;
  const dispatch = useDispatch();

  const sendRequest = async (userId, status) => {
    try {
      const res = await axios.post(
        BASE_URL + "/request/send/" + status + "/" + userId,
        {},
        { withCredentials: true }
      );
      dispatch(removeUserFromFeed(userId));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="card bg-base-300 w-96 shadow-sm mx-2">
      <figure>
        <img src={photoUrl} alt="Photo" className="max-h-50 object-cover w-full" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{firstName + " " + lastName}</h2>
        {age && gender && <p>{age + ", " + gender}</p>}
        <p>{about}</p>
        {skills?.length > 0 && (
          <div className="flex flex-wrap gap-1 mt-2">
            {skills.map((skill, i) => (
              <span key={i} className="badge badge-outline badge-sm">{skill}</span>
            ))}
          </div>
        )}
        <div className="card-actions justify-center my-4">
          <button
            className="btn btn-primary"
            aria-label={`Ignore ${firstName} ${lastName}`}
            onClick={() => sendRequest(_id, "ignored")}
          >
            Ignore
          </button>
          <button
            className="btn btn-secondary"
            aria-label={`Interested in ${firstName} ${lastName}`}
            onClick={() => sendRequest(_id, "interested")}
          >
            Interested
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
