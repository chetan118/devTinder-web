import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { BASE_URL } from "../utils/constants";
import { addUser } from "../utils/userSlice";
import UserCard from "./UserCard";
import ToastSuccessMessage from "./ToastSuccessMessage";

const EditProfile = ({ user }) => {
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [photoUrl, setPhotoUrl] = useState(user.photoUrl);
  const [age, setAge] = useState(user.age || "");
  const [gender, setGender] = useState(user.gender || "male");
  const [about, setAbout] = useState(user.about);
  const [saveProfileRes, setSaveProfileRes] = useState({
    success: false,
    message: "",
  });
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const handleSaveProfile = async () => {
    setError("");
    try {
      setIsLoading(true);
      const res = await axios.patch(
        BASE_URL + "/profile/edit",
        {
          firstName,
          lastName,
          photoUrl,
          age,
          gender,
          about,
        },
        { withCredentials: true }
      );
      setSaveProfileRes({
        success: true,
        message: res?.data?.message,
      });
      setTimeout(() => {
        setSaveProfileRes({
          success: false,
          message: "",
        });
      }, 3000);
      dispatch(addUser(res?.data?.data));
    } catch (err) {
      setError(err?.response?.data);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex justify-center mt-10 mb-20">
      <ToastSuccessMessage result={saveProfileRes} />
      <div className="flex justify-center mx-2">
        <div className="card card-border bg-base-300 w-96">
          <div className="card-body">
            <div className="label">
              <span>First Name</span>
            </div>
            <label className="input validator">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </g>
              </svg>
              <input
                type="text"
                required
                placeholder="First Name"
                pattern="[A-Za-z][A-Za-z0-9\- ]*"
                minLength="2"
                maxLength="50"
                title="Only letters, numbers, dash or space"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                onFocus={() => setError("")}
              />
            </label>
            <p className="validator-hint">
              Must be 2 to 50 characters
              <br />
              containing only letters, numbers, dash or space
            </p>
            <div className="label">
              <span>Last Name</span>
            </div>
            <label className="input validator">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </g>
              </svg>
              <input
                type="text"
                required
                placeholder="Last Name"
                pattern="[A-Za-z][A-Za-z0-9\- ]*"
                minLength="2"
                maxLength="50"
                title="Only letters, numbers, dash or space"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </label>
            <p className="validator-hint">
              Must be 2 to 50 characters
              <br />
              containing only letters, numbers, dash or space
            </p>
            <div className="label">
              <span>Photo URL</span>
            </div>
            <label className="input validator">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                  <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                </g>
              </svg>
              <input
                type="url"
                required
                placeholder="https://example.com/photo.jpg"
                pattern="^(https?://)?([a-zA-Z0-9]([a-zA-Z0-9\-].*[a-zA-Z0-9])?\.)+[a-zA-Z].*$"
                title="Must be valid URL"
                value={photoUrl}
                onChange={(e) => setPhotoUrl(e.target.value)}
              />
            </label>
            <p className="validator-hint">Must be valid URL</p>
            <div className="label">
              <span>Age</span>
            </div>
            <input
              type="number"
              className="input validator"
              required
              placeholder="Age (years)"
              min="18"
              max="100"
              title="Must be between 18 to 100"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
            <p className="validator-hint">Must be between 18 to 100</p>
            <div className="label">
              <span>Gender</span>
            </div>
            <select
              className="select"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            <div className="label">
              <span>About</span>
            </div>
            <textarea
              className="textarea validator"
              minLength="10"
              maxLength="5000"
              required
              placeholder="About Yourself"
              title="Must be between 10 to 5000 characters"
              value={about}
              onChange={(e) => setAbout(e.target.value)}
            ></textarea>
            <p className="validator-hint">
              Must be between 10 to 5000 characters
            </p>
            <p className="text-red-500">{error}</p>
            <div className="card-actions justify-center">
              <button
                className="btn btn-outline btn-primary"
                disabled={isLoading}
                onClick={handleSaveProfile}
              >
                {isLoading ? <span className="loading loading-spinner loading-xs"></span> : "Save Profile"}
              </button>
            </div>
          </div>
        </div>
      </div>
      <UserCard
        user={{
          firstName,
          lastName,
          photoUrl,
          age,
          gender,
          about,
        }}
      />
    </div>
  );
};

export default EditProfile;
