import React from 'react'
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div>
      <h1 className="hero-h1" >TEAM O<span>&#178;</span> FOR MI MAX 2 </h1>
     <div className="hero-text">
     <span className="hero-span"> A Team Of Amazing Developers Who Builds/Ports Robust Open Source Custom Roms and Kernals For Device Xiomi Max 2 (Oxygen) This Website is Created For Providing,Storing All Resources at One Place</span>
    
      
     </div>
<div className="hero-btn-sec">
<Link className="hero-btn" to="/" >
            Roms
            </Link>
    <Link className="hero-btn2" to="/Team" >
            Team
            </Link>
</div>
    </div>

  )
}

export default Hero
