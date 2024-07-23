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
import { CgSearchLoading } from "react-icons/cg";
import { useNavigate } from "react-router-dom";


export default function SearchPage() {
  const [SearchUsing, setSearchUsing] = useState(0);
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [resData, setResData] = useState(null);
  const [phoneNumber, setphoneNumber] = useState('');
  const [ipadd, setipadd] = useState('');
  const [name, setName] = useState('');


  const navigate = useNavigate();

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



    const handlePhoneChange = (event) => {
    setphoneNumber(event.target.value);
  };

  const validatePhoneNumber = (phoneNumber) => {
    const re = /^(?:\d{10}|\d{12}|\+\d{12})$/;
    return re.test(phoneNumber);
  };


  const handleIPAdress = (event) => {
    setipadd(event.target.value);
  };

  const validateIpAddress = (ipadd) => {
    // Regular expression to validate an IPv4 address
    const ipRegex = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
    
    // Test the input IP address against the regex
    return ipRegex.test(ipadd);
  };


  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  
  // Update validation logic for name
  const validateName = (name) => {
    return name.length >= 4;
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
            console.log(response.data);
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
      if (SearchUsing === 1) {
        if (validatePhoneNumber(phoneNumber)) {
          try {
            const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/getphone`, { phoneNumber });
            setResData(response.data);
            console.log(response.data);
          } catch (error) {
            console.error('Error fetching data:', error);
            setError("Bad Request");
          } finally {
            setLoading(false);
          }
        } else {
          setError("Invalid Phone Number");
          setLoading(false);
        }
      }
      if (SearchUsing === 2) {
        if (validateIpAddress(ipadd)) {
          try {
            const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/getip`, { ipadd });
            setResData(response.data);
            console.log(response.data);
          } catch (error) {
            console.error('Error fetching data:', error);
            setError("Bad Request");
          } finally {
            setLoading(false);
          }
        } else {
          setError("Invalid IP Address");
          setLoading(false);
        }
      }
      if (SearchUsing === 3) {
        if (validateName(name)) {
          try {
            const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/getnameInfo`, { name });
            setResData(response.data);
            console.log(response.data);
          } catch (error) {
            console.error('Error fetching data:', error);
            setError("Bad Request");
          } finally {
            setLoading(false);
          }
        } else {
          setError("Invalid Name Format");
          setLoading(false);
        }
      }

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
          <button id="BuyCreditsSearchPage"  onClick={()=>{navigate("/recharge")}}>
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
                <input type="text" placeholder="Enter a valid Phone Number"  value={phoneNumber} onChange={handlePhoneChange} />
              )}
              {SearchUsing === 2 && (
                <input type="text" placeholder="Enter a valid IP Address" value={ipadd} onChange={handleIPAdress} />
              )}
              {SearchUsing === 3 && (
                <input type="text" placeholder="Enter a Name" value={name} onChange={handleNameChange} />
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

                {
                  loading &&
                  <CgSearchLoading/>
                }
                {
                  !loading &&
                  <FaSearch/>
                }
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

          <ResultBox resData={resData} loading={loading} />
        </div>
      </div>
    </>
  );
}
