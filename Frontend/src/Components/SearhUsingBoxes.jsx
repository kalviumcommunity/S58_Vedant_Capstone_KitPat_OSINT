import React from 'react'
import { IoMail } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { TbWorldWww } from "react-icons/tb";
import { BiRename } from "react-icons/bi";
import { IconContext } from "react-icons/lib";

export default function SearhUsingBoxes({SearchUsing,setSearchUsing}) {
  return (
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
  )
}
