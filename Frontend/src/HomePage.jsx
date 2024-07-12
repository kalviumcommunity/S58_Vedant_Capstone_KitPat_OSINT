import React from 'react'

import './HomePage.css'
import { useNavigate } from 'react-router-dom';
import { IoIosHappy } from "react-icons/io";
import { IconContext } from 'react-icons/lib';
import { FaBoltLightning } from "react-icons/fa6";
import { SiGnuprivacyguard } from "react-icons/si";
import Navbar from './Components/Navbar';



export default function HomePage() {
  const navigate = useNavigate();
  return (
    <div id='HomePage'>
    <Navbar/>

<div id='HomePageContent'>
<div id='H1inHome'>KITPAT</div>
<div id='H2inHome'>THE ULTIMATE OPEN-SOURCE INTELLIGENCE PLATFORM</div>
<div id='HomePageQualities'>
  <div className='QualityBox'>
    <div>
      <IconContext.Provider value={{ color: "white", className: "global-class-name" }}>
      <IoIosHappy />
      </IconContext.Provider>
      </div>
      <span>Easy</span>
  </div>
  <div className='QualityBox'>
    <div>
    <IconContext.Provider value={{ color: "white", className: "global-class-name" }}>
      <FaBoltLightning />
      </IconContext.Provider>
    </div>
    <span>Powerful</span>
  </div>
  <div className='QualityBox'>
    <div>
    <IconContext.Provider value={{ color: "white", className: "global-class-name" }}>
      <SiGnuprivacyguard />
      </IconContext.Provider>
    </div>
    <span>Private</span>
  </div>
</div>
<button id='ButtonInHome' onClick={()=>{  navigate("/login");}}>Get Started</button>
<div title='?' id='MainTextInHome'>
  <p>An OSINT Tool By </p>
  <img src="rabbit.png" alt="" />
</div>
<p id='KitPatInfo'>Kitpat.io is an innovative platform that leverages open-source intelligence to provide users with comprehensive insights into their digital footprint. Whether it's an email address, phone number, IP address, or even a name, Kitpat.io can swiftly and efficiently search through breached databases worldwide to uncover what information has been exposed.</p>
<b>Read More</b>

</div>

    </div>
  )
}
