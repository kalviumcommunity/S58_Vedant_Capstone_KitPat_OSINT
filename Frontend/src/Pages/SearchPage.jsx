import React, { useState } from "react";
import "./SearchPage.css";
import { IoCaretDownOutline } from "react-icons/io5";
import { IconContext } from "react-icons/lib";
import { FaSearch } from "react-icons/fa";
import { IoIosInformationCircle } from "react-icons/io";
import Navbar2 from "../Components/Navbar2";
import SearhUsingBoxes from "../Components/SearhUsingBoxes";




export default function SearchPage() {

  const [SearchUsing, setSearchUsing] = useState(0)


  return (
    <>
    <Navbar2/>
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

          <SearhUsingBoxes SearchUsing={SearchUsing} setSearchUsing={setSearchUsing}/>

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
          <div id="hintforSearches">
            {
              SearchUsing === 0 &&
              <>
              <h4>Search Example: </h4>
              <h4> example@gmail.com</h4>
              </>
            }
                        {
              SearchUsing === 1 &&
              <>
              <h4>Search Example: </h4> 
              <h4> +911234567890 , 1234567890, 911234567890 </h4>
              <span>Try different formats to get better results. </span>
              </>
            }
                        {
              SearchUsing === 2 &&
              <>
              <h4>Search Example: </h4>
              <h4> 127.0.0.1</h4>
              </>
            }
                        {
              SearchUsing === 3 &&
              <>
              <h4>Search Example: </h4>
              <h4> John Smith</h4>
              </>
            }
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
