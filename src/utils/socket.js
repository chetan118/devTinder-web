import io from "socket.io-client";
import { BASE_URL } from "./constants";

export const createSocketConnection = () => {
  if (location.hostname === "localhost") {
    return io(BASE_URL, { reconnection: true, reconnectionAttempts: 5 });
  }
  return io("/", { path: "/api/socket.io", reconnection: true, reconnectionAttempts: 5 });
};
