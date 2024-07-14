import React, { useEffect, useRef, useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { FaRightFromBracket } from "react-icons/fa6";
import { IconContext } from "react-icons/lib";
import Navbar from "../Components/Navbar";
import axios from 'axios';
import Cookies from "js-cookie";
import { ColorRing } from "react-loader-spinner";

export default function Login() {
  const navigate = useNavigate();
  const accountNumberRef = useRef();
  const [error, setError] = useState("");
  const [Loading, setLoading] = useState(false);

  
  const Login = async()=>{
    const accountNumber = accountNumberRef.current.value;
    console.log(accountNumber.length)
    if (!Loading) {
      if (accountNumber.length === 25) {
        setError("")
      setLoading(true)
        try {
          const {data} = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/login`,
            {
              accountNumber,
          });
          setError("");
          console.log(data)
          Cookies.set("user", JSON.stringify(data.accountId));
          setLoading(false)
          navigate("/search")
        } catch (error) {   
          setLoading(false)
          setError(error.response.data.message)
        }
        
      }
      setError("Bad Request")
    
    }
    }


    useEffect(() => {
      const user = Cookies.get('user')
      if (user !== undefined) {
        navigate("/search")
      }
    }, [])

  return (
    <>
    <Navbar/>
      <div id="LoginPage">
        <h2>Log In</h2>
        <h3>Get Back In Researcher</h3>
        <div id="LoginBox">
          <h4>Enter your Account Number</h4>
          <div class="inputBox">
            <input ref={accountNumberRef} placeholder="Enter Account Number" type="text" required="" maxLength={25}/>
            <span>Account Number</span>
          </div>
          <span id="taglineInLogIn">No email, no username. Just anonymity</span>
          <div id="LogInEnterButton">
            <div onClick={()=>{Login()}}>
            {!Loading && 
                        <IconContext.Provider value={{ color: "black", className: "global-class-name" }}>
                        <FaRightFromBracket />
                        </IconContext.Provider>}
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
            </div>
          </div>

          <div id='NoAlreadyAccount'>
           <div id='alreadylineinLogin'>Still not a User? </div>
           <div id='notalreadybutton'  onClick={()=>{  navigate("/register");}}>Sign Up</div>
        </div>
        <div id="LoginError">{error}</div>
        </div>
      </div>
    </>
  );
}
