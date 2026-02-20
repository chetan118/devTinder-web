import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { createSocketConnection } from "../utils/socket";
import { useSelector } from "react-redux";
import axios from "axios";
import { BASE_URL } from "../utils/constants";

const Chat = () => {
  const { targetUserId } = useParams();
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const user = useSelector((state) => state.user);
  const connections = useSelector((state) => state.connections);
  const userId = user?._id;
  const targetUser = connections?.find((c) => c._id === targetUserId);
  const socketRef = useRef(null);

  useEffect(() => {
    if (!userId) {
      return;
    }
    const socket = createSocketConnection();
    socketRef.current = socket;
    socket.emit("joinChat", {
      firstName: user.firstName,
      userId,
      targetUserId,
    });

    socket.on("messageReceived", ({ firstName, lastName, text }) => {
      setMessages((messages) => [...messages, { firstName, lastName, text, createdAt: new Date().toISOString() }]);
    });

    return () => {
      socket.disconnect();
    };
  }, [userId, targetUserId]);

  const sendMessage = () => {
    // Prevent sending empty messages
    if (!socketRef.current || !newMessage.trim()) return;
    socketRef.current.emit("sendMessage", {
      firstName: user.firstName,
      lastName: user.lastName,
      userId,
      targetUserId,
      text: newMessage,
    });
    setNewMessage("");
  };

  const fetchChat = async () => {
    const chat = await axios.get(BASE_URL + "/chat/fetch/" + targetUserId, {
      withCredentials: true,
    });
    const chatMessages = chat.data.messages.map((msg) => {
      const { senderId, text, createdAt } = msg;
      return {
        firstName: senderId.firstName,
        lastName: senderId.lastName,
        text,
        createdAt,
      };
    });
    setMessages(chatMessages);
  };

  useEffect(() => {
    fetchChat();
  }, []);

  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      sendMessage();
    }
  };

  return (
    <div className="w-2/3 mx-auto border border-gray-600 m-5 h-[70vh] flex flex-col">
      <h1 className="p-5 border-b border-gray-600">Chat with {targetUser ? `${targetUser.firstName} ${targetUser.lastName}` : targetUserId}</h1>
      <div className="p-5 flex-1 overflow-auto">
        {messages && messages.map((msg, index) => {
          return (
            <div
              key={index}
              className={
                "chat gap-1 my-1 " +
                (user.firstName === msg.firstName ? "chat-end" : "chat-start")
              }
            >
              <div className="chat-header">
                {`${msg.firstName} ${msg.lastName}`}
                <time className="text-xs opacity-50">{msg.createdAt ? new Date(msg.createdAt).toLocaleTimeString() : ""}</time>
              </div>
              <div className="chat-bubble">{msg.text}</div>
              <div className="chat-footer opacity-50">Delivered</div>
            </div>
          );
        })}
        <div ref={messagesEndRef} />
      </div>
      <div className="p-5 border-t border-gray-600 flex items-center gap-2">
        <input
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          className="flex-1 border border-gray-500 text-white rounded p-2"
          placeholder="Type a message..."
          onKeyDown={handleKeyDown}
        ></input>
        <button onClick={sendMessage} className="btn btn-secondary" aria-label="Send message">
          Send
        </button>
      </div>
    </div>
  );
};

export default Chat;
