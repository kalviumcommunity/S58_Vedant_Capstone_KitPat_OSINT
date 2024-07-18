import React, { useEffect, useState } from "react";
import "./SearchPage.css";
import { IoCaretDownOutline } from "react-icons/io5";
import { IconContext } from "react-icons/lib";
import { FaSearch } from "react-icons/fa";
import Navbar2 from "../Components/Navbar2";
import SearhUsingBoxes from "../Components/SearhUsingBoxes";
import { BiSolidCoinStack } from "react-icons/bi";
import ResultBox from "../Components/ResultBox";
import Hints from "../Components/Hints";
import axios from "axios";

export default function SearchPage() {
  const [SearchUsing, setSearchUsing] = useState(0);
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [resData, setResData] = useState(null);


  useEffect(() => {
    if (error) {
      const errorBox = document.getElementById('ErrorShow');
      errorBox.classList.add('show');
      setTimeout(() => {
        errorBox.classList.remove('show');
        errorBox.classList.add('hide');
        setTimeout(() => {
          setError('');
          errorBox.classList.remove('hide');
        }, 500); // Match this duration with the transition time
      }, 3000); // Display duration
    }
  }, [error]);



  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSearchClick = async () => {
    if (loading === false) {
      setLoading(true);
      setError("");

      if (SearchUsing === 0) {
        if (validateEmail(email)) {
          try {
            const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/getmail`, { email });
            setResData(response.data);
            console.log(response);
          } catch (error) {
            console.error('Error fetching data:', error);
            setError("Bad Request");
          } finally {
            setLoading(false);
          }
        } else {
          setError("Invalid Email format");
          setLoading(false);
        }
      }
      setLoading(false)
    }
  };

  return (
    <>
      <div id="ErrorShow">
        {error}
      </div>
      <Navbar2 />
      <div id="SearchPage">
        <div id="SearchPAgeBoss">
          <button id="BuyCreditsSearchPage">
            Buy{" "}
            <IconContext.Provider
              value={{
                color: "white",
                className: "global-class-name",
                size: "20",
              }}
            >
              <BiSolidCoinStack />
            </IconContext.Provider>
          </button>
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

          <SearhUsingBoxes
            SearchUsing={SearchUsing}
            setSearchUsing={setSearchUsing}
          />

          <div id="searchboxandbutton">
            <div id="searchboxOfSearchPAge">
              {SearchUsing === 0 && (
                <input
                  type="text"
                  placeholder="Enter a valid Mail address"
                  value={email}
                  onChange={handleEmailChange}
                />
              )}
              {SearchUsing === 1 && (
                <input type="text" placeholder="Enter a valid Phone Number" />
              )}
              {SearchUsing === 2 && (
                <input type="text" placeholder="Enter a valid IP Address" />
              )}
              {SearchUsing === 3 && (
                <input type="text" placeholder="Enter a Name" />
              )}
            </div>
            <div onClick={handleSearchClick} id="MAinSearchbutton">
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
          <div id="CostOfSearch">
            Cost :  1
            <IconContext.Provider
              value={{
                color: "red",
                className: "global-class-name",
                size: "25",
              }}
            >
              <BiSolidCoinStack />
            </IconContext.Provider>
            &nbsp;per Search
          </div>

          <Hints SearchUsing={SearchUsing} />

          <ResultBox resData={resData} />
        </div>
      </div>
    </>
  );
}
