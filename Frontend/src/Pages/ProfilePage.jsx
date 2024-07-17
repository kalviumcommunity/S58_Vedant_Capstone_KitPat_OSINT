import React, { useState } from "react";
import "./SearchPage.css";
import Navbar2 from "../Components/Navbar2";
import "./ProfilePage.css";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";


export default function ProfilePage() {
  const navigate = useNavigate()


  const SignOut=()=>{
    Cookies.remove('user')
    navigate("/")
  }


  return (
    <>
      <Navbar2 />
      <div id="SearchPage">
      <div id="ProfilePageBoss">
        <div id="BackButton" onClick={()=>{navigate("/search")}} >
        <IoMdArrowRoundBack  />
          Back</div>

          <div id="ProfileId">
            <div>Account Number</div>
            <div>hgdftwirpfjdg263920fjeyss</div>
          </div>
          
          <div id="ContactUs">
            <div>ContactUs</div>
            <div>kitpatservices@gmail.com</div>
          </div>
          <div onClick={SignOut} id="SignOut">
            <div>Sign Out</div>
          </div>

      
      </div>
      </div>
    </>
  );
}
