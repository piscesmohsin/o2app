import React from 'react'
import DarkToggle  from './components/DarkToggle';
import "react-toggle/style.css";
import Hero from './components/Hero'
import { NavLink } from "react-router-dom";
const Nav = () => {
  return (
    <div>

 
      <header className="header">
  <nav className="navbar">
    <NavLink to="/" className="brand">
    TEAM O<span>&#178;</span>
          </NavLink>
    <input type="checkbox" id="nav" className="hidden" />
    <label htmlFor="nav" className="nav-toggle">
      <span />
      <span />
      <span />
    </label>
    <div className="wrapper">
      <ul className="menu">
        <li className="menu-item">
        <NavLink exact activeClassName="active-link" to="/" className="a">
             Roms
            </NavLink>
        </li>
        <li className="menu-item">
        <NavLink exact activeClassName="active-link" to="/Kernals" className="a">
             Kernals
            </NavLink>
        </li>
        <li className="menu-item">
        <NavLink exact activeClassName="active-link" to="/Team" className="a">
            Team
            </NavLink>
        </li>
       
        <li className="menu-item">
        <NavLink exact activeClassName="active-link" to="/Contact" className="a">
             Contact Us
            </NavLink>
        </li>
            <DarkToggle/>
      </ul>
    </div>

  </nav>

</header>
<Hero/>
    </div>
    
  )
}

export default Nav
