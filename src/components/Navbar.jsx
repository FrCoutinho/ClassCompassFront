import React from "react";
import { Link } from "react-router-dom";
import navbar from "../imagens/navbar.jpg";

const Navbar = () => {
  return (
    <div className="bodyNav">
      <nav>
        <Link to="/">
          <img src={navbar} alt="navbar" height={50} />{" "}
        </Link>
        <ul className="menu">
          {/* Classes Dropdown */}
          <li className="nav-item dropdown">
            <Link to="/classes" className="nav-links dropdown-toggle">
              Clases
            </Link>
            <ul className="submenu">
              <li className="dropdown-item">
                <Link to="/classes/mathematics">Mathematics</Link>
              </li>
              <li className="dropdown-item">
                <Link to="/classes/english">English</Link>
              </li>
              <li className="dropdown-item">
                <Link to="/classes/french">French</Link>
              </li>
              <li className="dropdown-item">
                <Link to="/classes/programming">Programming</Link>
              </li>
              <li className="dropdown-item">
                <Link to="/classes/programming">Others...</Link>
              </li>
            </ul>
          </li>

          {/* Signup */}
          <li className="nav-item signup">
            {" "}
            {/* Added new class name for styling */}
            <Link to="/signup" className="nav-links">
              Sign Up
            </Link>
          </li>
          <li className="nav-item login">
            {" "}
            {/* Added new class name for styling */}
            <Link to="/login" className="nav-links">
              Login
            </Link>
          </li>

          {/* Additional Links (Optional) */}
          {/* <li className="nav-item">
            <Link to="/about" className="nav-links">
              About Us
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-links">
              Contact Us
            </Link>
          </li> */}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
