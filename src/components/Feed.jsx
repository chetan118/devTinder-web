import axios from "axios";
import UserCard from "./UserCard";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addFeed } from "../utils/feedSlice";
import { useEffect, useState } from "react";

const Feed = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const userId = user?._id;
  const [isLoading, setIsLoading] = useState(false);
  const feed = useSelector((state) => state.feed);

  const getFeed = async () => {
    if (feed) return;
    try {
      setIsLoading(true);
      const res = await axios.get(BASE_URL + "/user/feed", {
        withCredentials: true,
      });
      dispatch(addFeed(res?.data?.users));
    } catch (err) {
      console.warn("Failed to fetch feed:", err.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getFeed();
  }, [userId]);

  if (isLoading) {
    return (
      <div className="flex justify-center mt-20">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  if (!feed || feed.length <= 0) {
    return (
      <div className="flex justify-center my-10">
        <h1 className="text-3xl">You've seen everyone! Check back later.</h1>
      </div>
    );
  }

  return (
    <div className="flex justify-center my-10">
      <UserCard user={feed[0]} />
    </div>
  );
};

export default Feed;
