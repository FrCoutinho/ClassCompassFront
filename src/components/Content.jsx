import React from "react";
import { Link } from "react-router-dom"; // Import Link component for routing

function Content() {
  return (
    <div className="Content">
      <header>
        <h1>Class Compass</h1> {/* App title */}
      </header>
      <nav className= "Contente2"> 
        <Link to="/teachers" className="nav-links">  
          <h2>Teachers</h2>
          <p>Join a supportive community of educators.</p>
        </Link>
        <Link to="/students" className="nav-links"> 
          <h2>Students</h2>
          <p>Empower your learning journey with engaging resources.</p>
        </Link>
        <Link to="/about-us" className="nav-links"> 
          <h2>About Us</h2>
          <p>Discover how Class Compass can unlock your educational potential.</p>
        </Link>
      </nav>
    </div>
  );
}

export default Content;
