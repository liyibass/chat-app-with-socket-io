import React, { useState, useEffect } from "react";
import "./Chat.style.scss";
import querystring from "query-string";
import io from "socket.io-client";
import InfoBar from "../InfoBar/InfoBar.component";
import Input from "../Input/Input.component";
import MessagesContainer from "../MessagesContainer/MessagesContainer.component";

let socket;

function Chat({ location }) {
  const [user, setUser] = useState({
    name: "",
    room: "",
  });
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const ENDPOINT = "localhost:5000";

  useEffect(() => {
    const { name, room } = querystring.parse(location.search);
    setUser({ name: name, room: room });

    socket = io(ENDPOINT);
    // 向server發送請求
    socket.emit("join", { name, room }, (error) => {
      if (error) {
        // alert(error);
      }
    });

    return () => {
      socket.emit("disconnect");
      socket.off();
    };
  }, [ENDPOINT, location.search]);

  useEffect(() => {
    // 負責處理server傳送過來的發文要求
    socket.on("message", (message) => {
      setMessages([...messages, message]);
    });
  }, [messages]);

  const sendMessage = (e) => {
    e.preventDefault();
    if (message) {
      socket.emit("sendMessage", message, () => setMessage(""));
    }
  };

  // console.log(messages);

  return (
    <div className="Chat">
      <div className="ChatContainer">
        <InfoBar room={user.room} />
        <MessagesContainer messages={messages} name={user.name} />
        <Input
          message={message}
          setMessage={setMessage}
          sendMessage={sendMessage}
        />
      </div>
    </div>
  );
}

export default Chat;
