import React, { useState, useEffect } from "react";
import './Header.css';
import Menubar from "../Menubar/Menubar";

const Header = () => {
  const [symbol, setSymbol] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1000);

  function changeMenu() {
    setSymbol(!symbol);
    setMenuOpen(prev => !prev);
  }

  // Update isMobile state when window resizes
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1000);
      if (window.innerWidth >= 1000) {
        setMenuOpen(true); // Show menu if width is over 1000px
      } else {
        setMenuOpen(false); // Hide menu when under 1000px
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="header">
      <div className="logo">
        <img src="logo.png" alt="Company Logo" />
      </div>

      {/* Conditionally apply class based on screen size */}
      <nav className={`nav ${menuOpen ? "open" : "closed"} ${isMobile ? "mobile" : ""}`}>
        <ul className="item">
          <li><a href="#" className="hover:text-gray-300">Home</a></li>
          <li><a href="#" className="hover:text-gray-300">About</a></li>
          <li><a href="#" className="hover:text-gray-300">Services</a></li>
          <li><a href="#" className="hover:text-gray-300">Contact</a></li>
        </ul>
      </nav>

      {/* Show Menubar only in mobile view */}
      {isMobile && (
        <Menubar 
          image={symbol ? "https://img.icons8.com/?size=96&id=12371&format=png" : "https://img.icons8.com/?size=96&id=T9nkeADgD3z6&format=png"} 
          changeMenuFunction={changeMenu} 
        />
      )}
    </header>
  );
};

export default Header;
