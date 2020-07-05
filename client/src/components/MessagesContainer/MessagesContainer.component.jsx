import React from "react";
import "./MessagesContainer.style.scss";
import { useState } from "react";
import { useEffect } from "react";
import ScrollToBottom from "react-scroll-to-bottom";
import Message from "../Message/Message.component";

function MessagesContainer({ messages, name }) {
  return (
    <ScrollToBottom className="MessagesContainer">
      {messages.map((message, i) => (
        <div key={i}>
          <Message message={message} name={name} />
        </div>
      ))}
    </ScrollToBottom>
  );
}

export default MessagesContainer;
