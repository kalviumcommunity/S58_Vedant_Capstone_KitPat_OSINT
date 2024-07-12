import React from 'react'
import "./Register.css";
import { useNavigate } from 'react-router-dom';
import Navbar from '../Components/Navbar';

export default function Register() {
    const navigate = useNavigate();
  return (
    <>
    <Navbar/>
    <div id='RegisterPage'>
        <h2>Sign Up</h2>
        <h3>Powerful Stuff few clicks away</h3>
       <div id='RegisterBox'>
        <h4>Get Started with KitPat !</h4>
        <div id='Step1Title'>· Start by generating a random account number.</div>
        <button id='buttontoGenrate'>Generate account number</button>
        <div id='Step2Title'>· Saving your account number.</div>
        <div id='Step3Title'>· Accepting the Terms and Conditions.</div>
        <div id='Step4Title'>· LogIn to your account.</div>
        <div id='AlreadyAccount'>
           <div id='alreadyline'>Already have an Account ? </div>
           <div id='alreadybutton'  onClick={()=>{  navigate("/login");}}>Login</div>
        </div>
       </div>
    </div>
    </>
  )
}
