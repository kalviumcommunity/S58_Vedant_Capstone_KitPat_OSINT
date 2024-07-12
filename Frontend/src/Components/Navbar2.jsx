import React from 'react'
import { BiSolidCoinStack } from "react-icons/bi";
import { FaUser } from "react-icons/fa";
import { IconContext } from "react-icons/lib";

export default function Navbar2() {
  return (
    <nav id="navbarinSearch">
    <div id="kitpattitleinNAv">KITPAT</div>
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
    <div id="ProfileINdiv">
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
