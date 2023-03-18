import React from "react";
import Button from "@mui/material/Button";
import redlock from "../Images/redlock.png";
import bluelock from "../Images/bluelock.png";
import orangelock from "../Images/orangelock.png";

function LockBox(props) {
  let func = () => {
    if (props.pic === "0") {
      return redlock;
    } else if (props.pic === "1") {
      return orangelock;
    } else {
      return bluelock;
    }
  };

  return (
    <div className="last" style={{ marginLeft: "-3rem" }}>
      <img
        src={func()}
        width="65rem"
        height="65rem"
        style={{
          marginLeft: "7rem",
          marginTop: "-1.5rem",
          position: "absolute",
        }}
        alt="Interlock"
      ></img>
      <div
        className="lockBox"
        style={{
          marginLeft: "8.5rem",
          border: `2px ${props.color} solid`,
          borderRadius: "25px",
          height: "17rem",
        }}
      >
        <h2
          style={{
            fontSize: "2rem",
            color: "white",
            fontWeight: "bold",
            marginBottom: "0rem",
            paddingTop: "2rem",
            paddingRight: `${props.pr}`,
          }}
        >
          {props.caption}
        </h2>
        <h2
          style={{
            fontSize: "2rem",
            color: "white",
            fontWeight: "bold",
            marginRight: "4rem",
          }}
        >
          {props.percent}
        </h2>
        <Button
          variant="contained"
          style={{
            backgroundColor: props.color,
            color: "white",
            fontWeight: "bold",
            fontSize: "1.5rem",
            width: "10rem",
            height: "2.8rem",
            margin: "1rem",
            marginBottom: "2rem",
            marginLeft: "1rem"
          }}
        >
          LOCK
        </Button>
      </div>
    </div>
  );
}

export default LockBox;
