import React from "react";
import "./Join.style.scss";
import { useState } from "react";
import { Link } from "react-router-dom";

function Join() {
  const [user, setUser] = useState({
    name: "",
    room: "",
  });

  return (
    <div className="Join">
      <div className="joinInnerContainer">
        <h1 className="heading">Join</h1>
        <div>
          <input
            type="text"
            placeholder="Name"
            className="joinInput"
            onChange={(e) => {
              setUser({ ...user, name: e.target.value });
            }}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Room"
            className="joinInput mt-20"
            onChange={(e) => {
              setUser({ ...user, room: e.target.value });
            }}
          />
        </div>
        <Link
          to={`chat?name=${user.name}&room=${user.room}`}
          // 只有在name和room有值時才會submit
          onClick={(e) =>
            !user.name || !user.room ? e.preventDefault() : null
          }
        >
          <button className="button mt-20" type="submit">
            Sign in
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Join;
