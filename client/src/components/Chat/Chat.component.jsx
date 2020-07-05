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
  const [messageList, setMessageList] = useState([]);

  const ENDPOINT = "localhost:5000";

  // --------進入聊天視窗後，向server發送請求：加入--------
  useEffect(() => {
    // 1-1 取得url中的user資訊並放到state中
    const { name, room } = querystring.parse(location.search);
    setUser({ name: name, room: room });

    // 1-2 向server發送請求：加入，順帶附上name跟room
    socket = io(ENDPOINT);
    socket.emit("join", { name, room }, (error) => {
      if (error) {
        alert(error);
      }
    });

    // 1-3 離開時向server發送請求：disconnect
    return () => {
      socket.emit("disconnect");
      socket.off();
    };
  }, [ENDPOINT, location.search]);

  // --------處理server傳送過來的發文要求--------
  useEffect(() => {
    socket.on("message", (message) => {
      setMessageList([...messageList, message]);
    });
  }, [messageList]);

  // --------Send鍵按下後，向server發送請求：Po文--------
  const sendMessage = (e) => {
    e.preventDefault();
    if (message) {
      socket.emit("sendMessage", message, () => setMessage(""));
    }
  };

  return (
    <div className="Chat">
      <div className="ChatContainer">
        <InfoBar room={user.room} />
        <MessagesContainer messages={messageList} name={user.name} />
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
