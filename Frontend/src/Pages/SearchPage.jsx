import React from "react";
import "./SearchPage.css";
import { IoCaretDownOutline } from "react-icons/io5";
import { IconContext } from "react-icons/lib";
import { FaSearch } from "react-icons/fa";

export default function SearchPage() {
  return (
    <>
      <nav id="navbarinSearch">
        <div id="kitpattitleinNAv">KITPAT</div>
        <div id="TokenInNAv"></div>
        <div id="ProfileINdiv"></div>
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
            <div className="searchUSingBox"></div>
            <div className="searchUSingBox"> </div>
            <divc className="searchUSingBox"></divc>
            <div className="searchUSingBox"></div>
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
