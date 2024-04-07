import React from 'react';
import { MdOutlineArrowDropDown } from "react-icons/md";
import './index.css'; // External CSS for styling

const Header = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <img src="https://res.cloudinary.com/dcqt2hg87/image/upload/v1703511061/menu_mvkbiz.png" alt='hamburger' className='hamburger-icon'/>
        <a href="#home" className="brand">IndigoLearn</a>
        
        <ul className="navbar-menu m-auto">
          <li className="navbar-item">
            <a href="#features" className="nav-link">BUY COURSES <MdOutlineArrowDropDown /></a>
            <ul className="dropdown-menu">
              <li><a href="#action/3.1" className="dropdown-item">Action</a></li>
              <li><a href="#action/3.2" className="dropdown-item">Another action</a></li>
              <li><a href="#action/3.3" className="dropdown-item">Something</a></li>
              <li><a href="#action/3.4" className="dropdown-item">Separated link</a></li>
            </ul>
          </li>
          <li className="navbar-item">
            <a href="#features" className="nav-link">PROGRAMS <MdOutlineArrowDropDown /></a>
            <ul className="dropdown-menu">
              <li><a href="#action/3.1" className="dropdown-item">Action</a></li>
              <li><a href="#action/3.2" className="dropdown-item">Another action</a></li>
              <li><a href="#action/3.3" className="dropdown-item">Something</a></li>
              <li><a href="#action/3.4" className="dropdown-item">Separated link</a></li>
            </ul>
          </li>
          <li className="navbar-item"><a href="#features" className="nav-link">FREE RESOURCES</a></li>
         
        </ul>
        <button className='button-container'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGcCcMKfB-P88NBqm5doVLLnfHx1V4AiR7XIm-bkSpeijxGpIl" alt="login" className='login-image'/>
            Log In/Sign Up
        </button>
      </div>
    </nav>
  );
}

export default Header;
