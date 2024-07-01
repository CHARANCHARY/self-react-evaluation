import React from 'react';
import { MdOutlineArrowDropDown } from "react-icons/md";
import { HiMiniBars3CenterLeft } from "react-icons/hi2";
import { FaUserCircle } from "react-icons/fa";


import './index.css'; // External CSS for styling

const Header = () => {
  return (
    <nav className="navbar">
      <div className="container">
      <HiMiniBars3CenterLeft  className='hamburger-icon' />

        <a href="#home" className="brand">IndigoLearn</a>
        
        <ul className="navbar-menu m-auto">
          <li className="navbar-item">
            <a href="#features" className="nav-link">Buy courses <MdOutlineArrowDropDown /></a>
            <ul className="dropdown-menu">
              <li><a href="#action/3.1" className="dropdown-item">Action</a></li>
              <li><a href="#action/3.2" className="dropdown-item">Another action</a></li>
              <li><a href="#action/3.3" className="dropdown-item">Something</a></li>
              <li><a href="#action/3.4" className="dropdown-item">Separated link</a></li>
            </ul>
          </li>
          <li className="navbar-item">
            <a href="#features" className="nav-link">Programs <MdOutlineArrowDropDown /></a>
            <ul className="dropdown-menu">
              <li><a href="#action/3.1" className="dropdown-item">Action</a></li>
              <li><a href="#action/3.2" className="dropdown-item">Another action</a></li>
              <li><a href="#action/3.3" className="dropdown-item">Something</a></li>
              <li><a href="#action/3.4" className="dropdown-item">Separated link</a></li>
            </ul>
          </li>
          <li className="navbar-item"><a href="#features" className="nav-link">Free Resource</a></li>
         
        </ul>
        <button className='button-container'>
        <FaUserCircle className='login-image'/>

            Log In/Sign Up
        </button>
      </div>
    </nav>
  );
}

export default Header;
