import React from "react";
import "./Join.style.scss";
import { useState } from "react";
import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
  formControl: {
    // margin: theme.spacing(1),
    minWidth: "100%",
    textAlign: "left",
    // padding: "10px",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
    background: "white",
  },
}));

function Join() {
  const [user, setUser] = useState({
    name: "",
    room: "A",
  });

  const classes = useStyles();
  const [age, setAge] = React.useState("");

  return (
    <div className="Join">
      <div className="joinInnerContainer">
        <h1 className="heading">Chat</h1>
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
          <FormControl className={classes.formControl}>
            <Select
              value={user.room}
              onChange={(e) => {
                setUser({ ...user, room: e.target.value });
              }}
              displayEmpty
              className={classes.selectEmpty}
              inputProps={{ "aria-label": "Without label" }}
            >
              <MenuItem value={"A"}>Room A</MenuItem>
              <MenuItem value={"B"}>Room B</MenuItem>
              <MenuItem value={"C"}>Room C</MenuItem>
            </Select>
          </FormControl>

          {/* <input
            type="text"
            placeholder="Room"
            className="joinInput mt-20"
            onChange={(e) => {
              setUser({ ...user, room: e.target.value });
            }}
          /> */}
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
