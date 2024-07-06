import React from 'react'

import './HomePage.css'
import { useNavigate } from 'react-router-dom';
import { IoIosHappy } from "react-icons/io";
import { IconContext } from 'react-icons/lib';
import { FaBoltLightning } from "react-icons/fa6";
import { SiGnuprivacyguard } from "react-icons/si";



export default function HomePage() {
  const navigate = useNavigate();
  return (
    <div id='HomePage'>
      <nav id='Navbar'>
        <div id='NavOPitons'>
          <div>Home</div>
          <div>Legal</div>
        </div>
      </nav>


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
<button id='ButtonInHome'>Get Started</button>
<div id='MainTextInHome'>
  <p>An OSINT Tool By </p>
  <img src="rabbit.png" alt="" />
</div>
</div>

    </div>
  )
}
