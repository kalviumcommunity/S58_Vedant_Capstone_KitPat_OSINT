import React, { useState } from "react";
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
import { IoIosInformationCircle } from "react-icons/io";




export default function SearchPage() {

  const [SearchUsing, setSearchUsing] = useState(0)


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
            <div onClick={()=>{setSearchUsing(0)}} style={{backgroundColor: SearchUsing === 0 ? "#F12D3F" : "white"}} className="searchUSingBox">
            <IconContext.Provider
              value={{
                color: SearchUsing === 0 ? "white" : "black",
                className: "global-class-name",
                size: "22",
              }} 
            >
              <IoMail id="arrowdown" />
            </IconContext.Provider> 
            <span style={{color: SearchUsing === 0 ? "white" : "black"}}>Mail</span>
            </div>
            <div onClick={()=>{setSearchUsing(1)}} style={{backgroundColor: SearchUsing === 1 ? "#F12D3F" : "white"}}  className="searchUSingBox"> 
            <IconContext.Provider
              value={{
                color: SearchUsing === 1 ? "white" : "black",
                className: "global-class-name",
                size: "20",
              }}
            >
              <FaPhone id="arrowdown" />
            </IconContext.Provider> <span style={{color: SearchUsing === 1 ? "white" : "black"}}>Phone</span>
            </div>
            <div onClick={()=>{setSearchUsing(2)}} style={{backgroundColor: SearchUsing === 2 ? "#F12D3F" : "white"}}  className="searchUSingBox"> 
            <IconContext.Provider
              value={{
                color: SearchUsing === 2 ? "white" : "black",
                className: "global-class-name",
                size: "22",
              }}
            >
              <TbWorldWww id="arrowdown" />
            </IconContext.Provider> <span style={{color: SearchUsing === 2 ? "white" : "black"}}>IP Address</span>
            </div>
            <div onClick={()=>{setSearchUsing(3)}} style={{backgroundColor: SearchUsing === 3 ? "#F12D3F" : "white"}}  className="searchUSingBox"> 
            <IconContext.Provider
              value={{
                color: SearchUsing === 3 ? "white" : "black",
                className: "global-class-name",
                size: "22",
              }}
            >
              <BiRename id="arrowdown" />
            </IconContext.Provider>  <span style={{color: SearchUsing === 3 ? "white" : "black"}}>Name</span>
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
            <IconContext.Provider
              value={{
                className: "global-class-name",
                size: "85",
              }}
            >
              <IoIosInformationCircle />
            </IconContext.Provider>
            <h3>Search something to see results here.</h3>
          </div>
        </div>
      </div>
    </>
  );
}
