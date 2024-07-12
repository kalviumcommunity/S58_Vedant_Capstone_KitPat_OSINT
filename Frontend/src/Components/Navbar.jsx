import React from 'react'

export default function Navbar() {
  return (
    <nav id='Navbar'>
    <div id='NavOPitons'>
      <div  onClick={()=>{  navigate("/");}}>Home</div>
      <div  onClick={()=>{  navigate("/legal");}}>Legal</div>
    </div>
  </nav>
  )
}
