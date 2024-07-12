import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <nav id='Navbar'>
    <div id='NavOPitons'>
      <div  onClick={()=>{  navigate("/");}}>Home</div>
      <div  onClick={()=>{  navigate("/legal");}}>Legal</div>
    </div>
  </nav>
  )
}
