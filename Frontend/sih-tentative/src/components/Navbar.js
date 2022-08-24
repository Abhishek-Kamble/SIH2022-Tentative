import React, { useEffect, useState } from "react";
import "../CSS/Navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";

import { Link } from "react-router-dom";

const Navbar = (props) => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  const [credData,setCredData] = useState({});
  useEffect(() => {
    var token = localStorage.getItem('token');
    var id = localStorage.getItem('id');
    if(token && id)
      setCredData({token: token, id: id});
  }, [])

  console.log(props);
  
  if (props.role === 'admin') {
    return (
      <>
        <nav className="main-nav">
          {/* 1st logo part  */}
          <div className="logo">
            <h2>
              EGOV
            </h2>
          </div>

          {/* 2nd menu part  */}
          <div
            className={
              showMediaIcons ? "mobile-menu-link" : "menu-link"
            }>
            <ul>
              <li>
                <Link to="/adminDashboard">Home</Link>
              </li>
              <div className="dropdown-main">
                <button className="menu-btn">Staff </button>
                <div className="menu-content">
                  <Link className="links-hidden" to="/staffRegistration">Registration</Link>
                  <Link className="links-hidden" to="/staffInfo">Information</Link>
                </div>
              </div>
              <li>
                <Link to="/logout">Logout</Link>
              </li>
            </ul>
          </div>

          {/* 3rd social media links */}
          <div className="social-media">


            {/* hamburget menu start  */}
            <div className="hamburger-menu">
              <a style={{ color: "white" }} href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
                <GiHamburgerMenu />
              </a>
            </div>
          </div>
        </nav>
      </>
    );
  }
  else if (props.role === 'user') {
    return (
      <>
        <nav className="main-nav">
          {/* 1st logo part  */}
          <div className="logo">
            <h2>
              EGOV
            </h2>
          </div>

          {/* 2nd menu part  */}
          <div
            className={
              showMediaIcons ? "mobile-menu-link" : "menu-link"
            }>
            <ul>
              <li>
                <Link to="/userDashboard">Home</Link>
              </li>
              <li>
                <Link to="/property">Property</Link>
              </li>
              <li>
                <Link to="/logout">Logout</Link>
              </li>
            </ul>
          </div>

          {/* 3rd social media links */}
          <div className="social-media">


            {/* hamburget menu start  */}
            <div className="hamburger-menu">
              <a style={{ color: "white" }} href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
                <GiHamburgerMenu />
              </a>
            </div>
          </div>
        </nav>
      </>
    );
  }
  else if (props.role === 'staff') {
    return (
      <>
        <nav className="main-nav">
          {/* 1st logo part  */}
          <div className="logo">
            <h2>
              EGOV
            </h2>
          </div>

          {/* 2nd menu part  */}
          <div
            className={
              showMediaIcons ? "mobile-menu-link" : "menu-link"
            }>
            <ul>
              <li>
                <Link to="/staffDashboard">Home</Link>
              </li>
              <li>
                <Link to="/propertyRegistration">pRegister</Link>
              </li>
              <li>
                <Link to="/logout">Logout</Link>
              </li>
            </ul>
          </div>

          {/* 3rd social media links */}
          <div className="social-media">


            {/* hamburget menu start  */}
            <div className="hamburger-menu">
              <a style={{ color: "white" }} href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
                <GiHamburgerMenu />
              </a>
            </div>
          </div>
        </nav>
      </>
    );
  }
  else {
    return (
      <>
        <nav className="main-nav">
          {/* 1st logo part  */}
          <div className="logo">
            <h2>
              EGOV
            </h2>
          </div>

          {/* 2nd menu part  */}
          <div
            className={
              showMediaIcons ? "mobile-menu-link" : "menu-link"
            }>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">about</Link>
              </li>
              <li>
                <Link to="/Register">Register</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
            </ul>
          </div>

          {/* 3rd social media links */}
          <div className="social-media">


            {/* hamburget menu start  */}
            <div className="hamburger-menu">
              <a style={{ color: "white" }} href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
                <GiHamburgerMenu />
              </a>
            </div>
          </div>
        </nav>
      </>
    );
  }
};

export default Navbar;