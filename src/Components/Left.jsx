import React from "react";
import "../Styles/left.css";
import triangle from "../Images/orange-triangle.png";
import circle from "../Images/blue-circle.png";
import lock from "../Images/pink-lock.png";
import { Button } from "@mui/material";
import dino from "../Images/dino.png";
import tele from "../Images/tele.png";
import atm from "../Images/atm.png";
import twitter from "../Images/twitter.png";
import comb from "../Images/comb.png";
import Right from '../Components/Right';

function Left() {
  return (
    <div className="overall">
        <div className="flexContainerLeft">
          <div className="rowContainer">
            <img
              src={lock}
              width="110rem"
              height="105rem"
              style={{
                padding: "1rem",
              }}
              alt="Interlock"
            ></img>
            <div style={{ color: "white" }} className="textContainer">
              <p style={{ fontSize: "1.7rem", marginBottom: "0.6rem" }}>
                Supply Locked
              </p>
              <h2
                style={{
                  marginTop: "0rem",
                  marginRight: "6rem",
                  fontSize: "2rem",
                }}
              >
                43%
              </h2>
            </div>
          </div>
          <div className="rowContainer">
            <img
              src={circle}
              width="110rem"
              height="105rem"
              style={{
                padding: "1rem",
              }}
              alt="Interlock"
            ></img>
            <div style={{ color: "white" }} className="textContainer">
              <p
                style={{
                  fontSize: "1.7rem",
                  marginRight: "8rem",
                  marginBottom: "0.6rem",
                }}
              >
                FDV
              </p>
              <h2
                style={{
                  marginTop: "0rem",
                  marginRight: "0rem",
                  fontSize: "2rem",
                }}
              >
                $4,301,200
              </h2>
            </div>
          </div>
          <div className="rowContainer">
            <img
              src={triangle}
              width="110rem"
              height="105rem"
              style={{
                padding: "1rem",
              }}
              alt="Interlock"
            ></img>
            <div style={{ color: "white" }} className="textContainer">
              <p style={{ fontSize: "1.7rem", marginBottom: "0.6rem" }}>
                USD Price
              </p>
              <h2
                style={{
                  marginTop: "0rem",
                  marginRight: "2rem",
                  fontSize: "2rem",
                }}
              >
                $4.30
              </h2>
            </div>
          </div>
          <hr
            style={{
              width: "28rem",
              borderColor: "#C00850",
              marginLeft: "1.5rem",
              marginTop: "3rem",
              marginBottom: "1.5rem",
            }}
          />
          <input
            style={{
              height: "1.75rem",
              width: "28rem",
              outline: "none",
              backgroundColor: "#4A0423",
              marginLeft: "1.5rem",
              marginBottom: "1rem",
              border: "3px solid #4A0423",
              borderRadius: "10px",
              fontSize: "20px",
              color: "white",
            }}
            type="text"
          />

          <div className="rowContainer" style={{ marginBottom: "1rem" }}>
            <Button
              variant="contained"
              style={{
                backgroundColor: "#4A0423",
                marginLeft: "1.5rem",
                width: "13.8rem",
                borderRadius: "10px",
              }}
            >
              Docs
            </Button>
            <Button
              variant="contained"
              style={{
                backgroundColor: "#4A0423",
                marginLeft: "1rem",
                width: "13.8rem",
                borderRadius: "10px",
              }}
            >
              Chart
            </Button>
          </div>

          <div style={{ marginBottom: "2rem" }}>
            <img
              src={tele}
              style={{
                width: "4rem",
                height: "4rem",
                marginLeft: "1rem",
              }}
              alt="tele"
            ></img>
            <img
              src={twitter}
              style={{
                width: "4.5rem",
                height: "4rem",
                marginLeft: "2.2rem",
              }}
              alt="twitter"
            ></img>
            <img
              src={comb}
              style={{
                width: "4rem",
                height: "4rem",
                marginLeft: "2.2rem",
              }}
              alt="comb"
            ></img>
            <img
              src={atm}
              style={{
                width: "4rem",
                height: "4rem",
                marginLeft: "2.2rem",
              }}
              alt="atm"
            ></img>
            <img
              src={dino}
              style={{
                width: "4rem",
                height: "4rem",
                marginLeft: "2.2rem",
              }}
              alt="dino"
            ></img>
          </div>
        </div>
        <div
          style={{
            borderLeft: "2px solid #C00850",
            height: "41rem",
            position: "absolute",
            left: "32rem",
            top: "13rem",
          }}
        ></div>
        <Right />
    </div>
  );
}

export default Left;
