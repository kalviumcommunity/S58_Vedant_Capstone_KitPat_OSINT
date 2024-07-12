import React from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { FaRightFromBracket } from "react-icons/fa6";
import { IconContext } from "react-icons/lib";
import Navbar from "../Components/Navbar";

export default function Login() {
  const navigate = useNavigate();
  return (
    <>
    <Navbar/>
      <div id="LoginPage">
        <h2>Log In</h2>
        <h3>Get Back In Researcher</h3>
        <div id="LoginBox">
          <h4>Enter your Account Number</h4>
          <div class="inputBox">
            <input placeholder="Enter Account Number" type="text" required="" />
            <span>Account Number</span>
          </div>
          <span id="taglineInLogIn">No email, no username. Just anonymity</span>
          <div id="LogInEnterButton">
            <div>
            <IconContext.Provider value={{ color: "black", className: "global-class-name" }}>
            <FaRightFromBracket />
            </IconContext.Provider>
            </div>
          </div>

          <div id='NoAlreadyAccount'>
           <div id='alreadylineinLogin'>Still not a User? </div>
           <div id='notalreadybutton'  onClick={()=>{  navigate("/register");}}>Sign Up</div>
        </div>
        </div>
      </div>
    </>
  );
}
