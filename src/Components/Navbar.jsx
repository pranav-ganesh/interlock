import React from "react";
import blurry from "../Images/blurry.png";
import Button from "@mui/material/Button";
import "../Styles/navstyle.css";

function Navbar() {
  return (
    <div className="flexContainer">
      <img
        src={blurry}
        width="165rem"
        height="175rem"
        style={{
          padding: "1rem",
        }}
        alt="Interlock"
      ></img>
      <Button
        variant="contained"
        style={{
          backgroundColor: "#C00850",
          color: "white",
          fontWeight: "bold",
          width: "15rem",
          height: "3.5rem",
          fontSize: "1.75rem",
          textTransform: "none",
          marginTop: "3rem",
          marginLeft: "55rem",
        }}
      >
        Connect
      </Button>
    </div>
  );
}

export default Navbar;
