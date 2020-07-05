import React from "react";
import "./InfoBar.style.scss";

function InfoBar({ room }) {
  return (
    <div className="InfoBar">
      <div className="leftInnerContainer">
        <h3>{room}</h3>
      </div>
      <div className="rightInnerContainer">
        <a href="/">
          <i className="far fa-times-circle"></i>
        </a>
      </div>
    </div>
  );
}

export default InfoBar;
