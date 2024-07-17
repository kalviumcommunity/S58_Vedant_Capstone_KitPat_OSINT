import React from 'react'
import { BiSolidCoinStack } from "react-icons/bi";
import { FaUser } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { useNavigate } from 'react-router-dom';

export default function Navbar2() {
  const navigate = useNavigate();
  return (
    <nav id="navbarinSearch">
    <div id="kitpattitleinNAv" onClick={()=>{navigate("/search")}}>KITPAT</div>
    <div id="TokenInNAv">
      <div id="tokensforkitpat">
      <IconContext.Provider
          value={{
            color: "black",
            className: "global-class-name",
            size: "25",
          }}
        >
          <BiSolidCoinStack/>
        </IconContext.Provider>
      </div>
      <div id="tokenamount">0</div>
    </div>
    <div id="ProfileINdiv" onClick={()=>{navigate("/profile")}}>
    <IconContext.Provider
          value={{
            color: "black",
            className: "global-class-name",
            size: "20",
          }}
        >
          <FaUser/>
        </IconContext.Provider>
    </div>
  </nav>
  )
}
