import React, { useState } from "react";
import "./Register.css";
import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";
import { ColorRing } from "react-loader-spinner";
import { BiSolidCopy } from "react-icons/bi";

export default function Register() {
  const navigate = useNavigate();
  const [Step, setStep] = useState(0);
  const [Loading, setOnLoading] = useState(false);
  const onLoinClick = () => {
    setOnLoading(true);
    setStep(1);
  };
  return (
    <>
      <Navbar />
      <div id="RegisterPage">
        <h2>Sign Up</h2>
        <h3>Powerful Stuff few clicks away</h3>
        <div id="RegisterBox">
          <h4>Get Started with KitPat !</h4>
          <div
            id="Step1Title"
            style={{ textDecoration: Step > 0 ? "line-through" : "" }}
          >
            · Start by generating a random account number.
          </div>
          {Step === 0 && (
            <button id="buttontoGenrate" onClick={onLoinClick}>
              {!Loading && <div>Generate account number</div>}
              {Loading && (
                <ColorRing
                  visible={true}
                  height="30"
                  width="30"
                  ariaLabel="color-ring-loading"
                  wrapperStyle={{}}
                  wrapperClass="color-ring-wrapper"
                  colors={["#000000", "", "#080808", "#1a1919", "#2e2d2d"]}
                />
              )}
            </button>
          )}

          <div
            id="Step2Title"
            style={{
              color: Step >= 1 ? "white" : "rgba(255, 255, 255, 0.89)",
              marginTop: Step >= 1 ? "10px" : "20px",
              fontSize: Step >= 1 ? "19px" : "17px",
              textDecoration: Step > 1 ? "line-through" : "",
            }}
          >
            · Saving your account number.
          </div>
          {Step === 1 && (
            <div id="RegistrationNumberBoxConfirms">
              <div id="AccountNumberandcopy">
                <div id="ActuallId">hgdftwirpfjdg263920fjey36</div>
                <div style={{ color: "white", cursor: "pointer" }}>
                  <BiSolidCopy />
                </div>
              </div>
              <span style={{ marginTop: "5px" }}>Dont Loose It.</span>
              <span>Its the only identifier you need to use our service.</span>
              <span>Do not share you account number with others.</span>
              <span
                onClick={() => {
                  setStep(2);
                }}
                style={{ marginTop: "5px", cursor: "pointer" }}
              >
                Click <b style={{ textDecoration: "underline" }}>Continue</b> to
                activate your account.
              </span>
            </div>
          )}

          <div
            id="Step3Title"
            style={{
              color: Step >= 2 ? "white" : "rgba(255, 255, 255, 0.781);",
              marginTop: Step >= 2 ? "10px" : "20px",
              fontSize: Step >= 2 ? "19px" : "14px;",
              textDecoration: Step > 2 ? "line-through" : "",
            }}
          >
            · Accepting the Terms and Conditions.
          </div>
          {Step === 2 && (
            <>
              <div id="termsandcond">
                By continuing, you agree to our{" "}
                <b style={{ textDecoration: "underline", cursor: "pointer" }}>
                  terms and conditions.
                </b>
              </div>
              <button
                id="buttontoContinue"
                onClick={() => {
                  setStep(3);
                }}
              >
                Continue
              </button>
            </>
          )}

          <div
            id="Step4Title"
            style={{
              color: Step >= 3 ? "white" : "rgba(255, 255, 255, 0.781);",
              marginTop: Step >= 3 ? "10px" : "20px",
              fontSize: Step >= 3 ? "19px" : "14px;",
            }}
          >
            · LogIn to your account.
          </div>
          {Step === 3 && (
            <>
              <div id="Congrats">
                Congratulations 🥳, your account is now active.{" "}
              </div>
              <div id="AccountNumberandcopy">
                <div id="ActuallId">hgdftwirpfjdg263920fjey36</div>
                <div style={{ color: "white", cursor: "pointer" }}>
                  <BiSolidCopy />
                </div>
              </div>
              <div id="WelcometoKitpat">
                Welcome to Kitpat. You can now{" "}
                <b style={{ textDecoration: "underline", cursor: "pointer" }}>
                  Login here
                </b>
              </div>
              <div id="WelcometoKitpat" style={{fontWeight:"lighter"}}>Note: Dont Loose your Account Number.</div>
            </>
          )}

          <div id="AlreadyAccount">
            <div id="alreadyline">Already have an Account ? </div>
            <div
              id="alreadybutton"
              onClick={() => {
                navigate("/login");
              }}
            >
              Login
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
