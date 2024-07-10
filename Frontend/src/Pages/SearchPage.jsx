import React from "react";
import "./SearchPage.css";
import { IoCaretDownOutline } from "react-icons/io5";
import { IconContext } from "react-icons/lib";
import { FaSearch } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { TbWorldWww } from "react-icons/tb";
import { BiRename } from "react-icons/bi";
import { BiSolidCoinStack } from "react-icons/bi";
import { FaUser } from "react-icons/fa";



export default function SearchPage() {
  return (
    <>
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
      <div id="SearchPage">
        <div id="SearchPAgeBoss">
          <div id="SearchUsingText">
            <h4>Search Using</h4>
            <IconContext.Provider
              value={{
                color: "black",
                className: "global-class-name",
                size: "25",
              }}
            >
              <IoCaretDownOutline id="arrowdown" />
            </IconContext.Provider>
          </div>
          <div id="SearchUSingBoxes">
            <div className="searchUSingBox">
            <IconContext.Provider
              value={{
                color: "black",
                className: "global-class-name",
                size: "22",
              }} 
            >
              <IoMail id="arrowdown" />
            </IconContext.Provider> <span>Mail</span>
            </div>
            <div className="searchUSingBox"> 
            <IconContext.Provider
              value={{
                color: "black",
                className: "global-class-name",
                size: "20",
              }}
            >
              <FaPhone id="arrowdown" />
            </IconContext.Provider> <span>Phone</span>
            </div>
            <div className="searchUSingBox">
            <IconContext.Provider
              value={{
                color: "black",
                className: "global-class-name",
                size: "22",
              }}
            >
              <TbWorldWww id="arrowdown" />
            </IconContext.Provider> <span>IP Address</span>
            </div>
            <div className="searchUSingBox">
            <IconContext.Provider
              value={{
                color: "black",
                className: "global-class-name",
                size: "22",
              }}
            >
              <BiRename id="arrowdown" />
            </IconContext.Provider>  <span>Name</span>
            </div>
          </div>
          <div id="searchboxandbutton">
            <div id="searchboxOfSearchPAge">
              <input type="text" placeholder="Enter a valid mail address" />
            </div>
            <div id="MAinSearchbutton">
            <IconContext.Provider
              value={{
                color: "white",
                className: "global-class-name",
                size: "25",
              }}
            >
              <FaSearch />
            </IconContext.Provider>
            </div>
          </div>
          <div id="REsultBOX">

          </div>
        </div>
      </div>
    </>
  );
}
