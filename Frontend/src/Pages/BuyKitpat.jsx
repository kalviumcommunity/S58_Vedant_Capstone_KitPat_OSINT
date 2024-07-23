import React, { useState } from "react";
import "./BuyKitPat.css";
import Navbar2 from "../Components/Navbar2";
import { IoMdArrowRoundBack } from "react-icons/io";
import { FaBitcoin } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { FaEthereum } from "react-icons/fa6";
import { SiDogecoin } from "react-icons/si";
import { BiSolidCoinStack } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

export default function BuyKitpat() {
  const [Buy, setBuy] = useState(0);
  const navigate = useNavigate();
  return (
    <>
      <Navbar2 />
      <div id="BuyKitpat">
        <div id="BuyBigBoss">
          <div
            id="BackButton"
            onClick={() => {
              navigate("/search");
            }}
          >
            <IoMdArrowRoundBack />
            Back
          </div>
          <h3>
            Purchase that worth <br /> every Cent{" "}
          </h3>
          <div id="BuyOPtions">
            <div className="BuyoptionBoxes" style={{color: Buy === 0 ? "white" : "black",backgroundColor: Buy === 0 ? "#F12D3F" : "white"}}   onClick={()=>{setBuy(0)}}>
              <IconContext.Provider
                value={{
                  color: Buy === 0 ? "white" : "black",
                  className: "global-class-name",
                  size: "25",
                }}
              >
                <BiSolidCoinStack />
              </IconContext.Provider>
              <h4>800</h4>{" "}
              <span>15$</span>
            </div>
            <div className="BuyoptionBoxes"   style={{color: Buy === 1 ? "white" : "black",backgroundColor: Buy === 1 ? "#F12D3F" : "white"}}   onClick={()=>{setBuy(1)}}>
            <IconContext.Provider
                value={{
                  color: Buy === 1 ? "white" : "black",
                  className: "global-class-name",
                  size: "25",
                }}
              >
                <BiSolidCoinStack />
              </IconContext.Provider>
              <h4>1600</h4>{" "}
              <span>30$</span>
            </div>
            <div className="BuyoptionBoxes"  style={{color: Buy === 2 ? "white" : "black",backgroundColor: Buy === 2 ? "#F12D3F" : "white"}}   onClick={()=>{setBuy(2)}}>
            <IconContext.Provider
                value={{
                  color: Buy === 2 ? "white" : "black",
                  className: "global-class-name",
                  size: "25",
                }}
              >
                <BiSolidCoinStack />
              </IconContext.Provider>
              <h4>3200</h4>{" "}
              <span>60$</span>
            </div>
            <div className="BuyoptionBoxes"  style={{color: Buy === 3 ? "white" : "black",backgroundColor: Buy === 3 ? "#F12D3F" : "white"}}   onClick={()=>{setBuy(3)}}>
            <IconContext.Provider
                value={{
                  color: Buy === 3 ? "white" : "black",
                  className: "global-class-name",
                  size: "25",
                }}
              >
                <BiSolidCoinStack />
              </IconContext.Provider>
              <h4>8000</h4>{" "}
              <span>100$</span>
            </div>
          </div>
          <div id="BuyButtonandVisuas">
            <div id="Visuals">
              <h4>Pay Using: </h4>
              <div style={{ marginTop: "8px" }}>
                <IconContext.Provider
                  value={{
                    color: "black",
                    className: "global-class-name",
                    size: 20,
                  }}
                >
                  <FaBitcoin />
                </IconContext.Provider>
                <IconContext.Provider
                  value={{
                    color: "black",
                    className: "global-class-name",
                    size: 20,
                  }}
                >
                  <FaEthereum />
                </IconContext.Provider>
                <IconContext.Provider
                  value={{
                    color: "black",
                    className: "global-class-name",
                    size: 20,
                  }}
                >
                  <SiDogecoin />
                </IconContext.Provider>
              </div>
              <span
                style={{
                  marginLeft: "6px",
                  fontSize: "12px",
                  marginTop: "5px",
                  fontWeight: "bold",
                  opacity: "0.9",
                }}
              >
               & 200+
              </span>
            </div>
            <button>Continue to CheckOut</button>
          </div>
        </div>
        <div id="BuyAdvice">We highly recommend users take a screenshot after a successful payment for future reference and customer support.</div>
      </div>
    </>
  );
}
