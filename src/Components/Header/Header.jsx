import React, { useState, useEffect } from "react";
import "./Header.css";
import Menubar from "../Menubar/Menubar";
import { Link } from "react-router-dom";

const Header = () => {
  const [symbol, setSymbol] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1000);
  const [dropdownOpen, setDropdownOpen] = useState(null); // Track open dropdown

  function changeMenu() {
    setSymbol(!symbol);
    setMenuOpen((prev) => !prev);
  }

  // Handle dropdown toggle on click
  function toggleDropdown(menu) {
    setDropdownOpen((prev) => (prev === menu ? null : menu));
  }

  // Close dropdown on window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1000);
      if (window.innerWidth >= 1000) {
        setMenuOpen(true);
      } else {
        setMenuOpen(false);
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

      <nav
        className={`nav ${menuOpen ? "open" : "closed"} ${
          isMobile ? "mobile" : ""
        }`}
      >
        <ul className="item">
          {/* Buy Menu */}
          <li onClick={() => toggleDropdown("buy")}>
            <a href="#" className="Buy">
              Buy
            </a>
            <img src="https://img.icons8.com/?size=60&id=99992&format=png&color=FA5252" />
            {dropdownOpen === "buy" && (
              <div className="dropdown">
                <h4>House</h4>
                <h4>Flat</h4>
                <h4>Shop</h4>
              </div>
            )}
          </li>

          {/* Sell Menu */}
          <li onClick={() => toggleDropdown("sell")}>
            <a href="#" className="Sell">
              Sell
            </a>
            <img src="https://img.icons8.com/?size=60&id=99992&format=png&color=FA5252" />
            {dropdownOpen === "sell" && (
              <div className="dropdown">
                <h4>Post Property</h4>
                <h4>Dashboard</h4>
              </div>
            )}
          </li>

          {/* Rent Menu */}
          <li onClick={() => toggleDropdown("rent")}>
            <a href="#" className="Rent">
              Rent
            </a>
            <img src="https://img.icons8.com/?size=60&id=99992&format=png&color=FA5252" />
            {dropdownOpen === "rent" && (
              <div className="dropdown">
                <h4>House</h4>
                <h4>Flat</h4>
                <h4>Shop</h4>
              </div>
            )}
          </li>

          {/* Help Menu */}
          <li onClick={() => toggleDropdown("help")}>
            <a href="#" className="Help">
              Help
            </a>
            <img src="https://img.icons8.com/?size=60&id=99992&format=png&color=FA5252" />
            {dropdownOpen === "help" && (
              <div className="dropdown">
                <h4>About us</h4>
                <h4>Contact us</h4>
                <h4>FAQ</h4>
              </div>
            )}
          </li>

          {/* Profile Menu */}
          <li onClick={() => toggleDropdown("Profile")}>
            <a href="#" className="Profile">
              Profile
            </a>
            <img src="https://img.icons8.com/?size=60&id=99992&format=png&color=FA5252" />
            {dropdownOpen === "Profile" && (
              <div className="dropdown">
                <Link to="/signup">Sign up</Link>
                <Link to="/login">Log in</Link>
              </div>
            )}
          </li>
        </ul>
      </nav>

      {/* Mobile Menu Toggle */}
      {isMobile && (
        <Menubar
          image={
            symbol
              ? "https://img.icons8.com/?size=96&id=12371&format=png"
              : "https://img.icons8.com/?size=96&id=T9nkeADgD3z6&format=png"
          }
          changeMenuFunction={changeMenu}
        />
      )}
    </header>
  );
};

export default Header;
