import React from "react";
import "../Styles/left.css";
import datahouse from "../Images/datahouse.png";
import clock from "../Images/clock.png";
//import Button from "@mui/material/Button";
import LockBox from "./LockBox";

function Right() {
  return (
    <div className="flexContainerRight">
      <div className="topRight">
        <div className="inner">
          <img
            src={datahouse}
            width="110rem"
            height="152rem"
            style={{
              marginLeft: "5rem",
            }}
            alt="Interlock"
          ></img>
          <div style={{ color: "white" }} className="textContainer2">
            <p
              style={{
                fontSize: "1.7rem",
                marginTop: "0.3rem",
                marginBottom: "3rem",
              }}
            >
              Your Balance
            </p>
            <h2
              style={{
                fontSize: "2rem",
                marginTop: "-2rem",
                marginRight: "4.5rem",
              }}
            >
              1300
            </h2>
            <h2
              style={{
                fontSize: "1.5rem",
                marginTop: "-0.5rem",
                marginRight: "4rem",
              }}
            >
              $5,590
            </h2>
          </div>
        </div>

        <div className="inner">
          <img
            src={clock}
            width="110rem"
            height="152rem"
            style={{
              marginLeft: "6rem",
            }}
            alt="Interlock"
          ></img>
          <div style={{ color: "white" }} className="textContainer">
            <p
              style={{
                fontSize: "1.7rem",
                marginTop: "0.3rem",
                marginBottom: "3rem",
              }}
            >
              Wallet unlock block
            </p>
            <h2
              style={{
                fontSize: "2rem",
                marginTop: "-2rem",
                marginRight: "4rem",
              }}
            >
              58931083
            </h2>
            <h2
              style={{
                fontSize: "1.5rem",
                marginTop: "-0.5rem",
                marginRight: "5rem",
              }}
            >
              In 188 hours
            </h2>
          </div>
        </div>
      </div>
      <hr
        style={{
          width: "45rem",
          borderColor: "#C00850",
          marginLeft: "6rem",
          marginTop: "3rem",
          marginBottom: "1.5rem",
        }}
      />
      <h1
        style={{
          color: "white",
          textAlign: "left",
          marginLeft: "5rem",
          fontSize: "2.5rem",
          marginTop: "0rem",
          marginBottom: "0.5rem"
        }}
      >
        Create or Extend Your Lock
      </h1>
      <p
        style={{
          color: "white",
          textAlign: "left",
          marginLeft: "5rem",
          fontSize: "1.75rem",
          marginTop: "0rem",
          marginBottom: "5rem"
        }}
      >
        And gain an instant balance increase
      </p>
      <div style={{ display: "flex" }}>
        <LockBox color="#C00850" caption="24 hours" percent="+3%" pr="1rem" pic="0" />
        <LockBox color="#EF4A1D" caption="3 days" percent="+15%" pr="3rem" pic="1" />
        <LockBox color="#03BED5" caption="2 weeks" percent="+80%" pr="1.5rem" pic="2" />
      </div>
    </div>
  );
}

export default Right;
