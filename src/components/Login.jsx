import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants";

const Login = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoginPage, setIsLoginPage] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      setError("");
      setIsLoading(true);
      const res = await axios.post(
        BASE_URL + "/login",
        {
          emailId,
          password,
        },
        { withCredentials: true }
      );
      dispatch(addUser(res.data));
      return navigate("/");
    } catch (err) {
      setError(err?.response?.data || "Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignUp = async () => {
    try {
      setError("");
      setIsLoading(true);
      const res = await axios.post(
        BASE_URL + "/signup",
        {
          firstName,
          lastName,
          emailId,
          password,
        },
        {
          withCredentials: true,
        }
      );
      dispatch(addUser(res?.data?.data));
      return navigate("/profile");
    } catch (err) {
      setError(err?.response?.data || "Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      isLoginPage ? handleLogin() : handleSignUp();
    }
  };

  return (
    <div className="flex justify-center mt-10 mb-20">
      <div className="card card-border bg-base-300 w-96">
        <div className="card-body">
          {!isLoginPage && (
            <>
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
                  onKeyDown={handleKeyDown}
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
                  onKeyDown={handleKeyDown}
                />
              </label>
              <p className="validator-hint">
                Must be 2 to 50 characters
                <br />
                containing only letters, numbers, dash or space
              </p>
            </>
          )}
          <div className="label">
            <span>Email ID</span>
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
                <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
              </g>
            </svg>
            <input
              type="email"
              value={emailId}
              autoComplete="email"
              placeholder="e.g. john@example.com"
              onChange={(e) => setEmailId(e.target.value)}
              onKeyDown={handleKeyDown}
              required
            />
          </label>
          <div className="validator-hint">Enter valid email address</div>
          <div className="label">
            <span>Password</span>
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
                <path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path>
                <circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle>
              </g>
            </svg>
            <input
              type="password"
              value={password}
              autoComplete="current-password"
              required
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              onKeyDown={handleKeyDown}
              minLength="8"
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              title="Must be at least 8 characters, including number, lowercase letter, uppercase letter"
            />
          </label>
          <p className="validator-hint">
            Must be more than 8 characters, including
            <br />
            At least one number <br />
            At least one lowercase letter <br />
            At least one uppercase letter
          </p>
          <p className="text-red-500">{error}</p>
          <div className="card-actions justify-center">
            <button
              className="btn btn-outline btn-primary"
              disabled={isLoading}
              onClick={isLoginPage ? handleLogin : handleSignUp}
            >
              {isLoading ? (isLoginPage ? "Logging in..." : "Signing up...") : (isLoginPage ? "Login" : "SignUp")}
            </button>
          </div>
          <p
            onClick={() => setIsLoginPage(!isLoginPage)}
            className="cursor-pointer mx-auto mt-2"
          >
            {isLoginPage
              ? "New User? Please sign up here..."
              : "Existing User? Please login here..."}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
