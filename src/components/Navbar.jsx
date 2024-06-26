import React, { useRef, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const navRef = useRef();
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
    if (isOpen) {
      closeNavbar();
    } else {
      navRef.current.classList.add("responsive_nav");
    }
  };

  const handleNavigation = (path) => {
    if (location.pathname !== path) {
      navigate(path);
      closeNavbar();
    }
  };

  const closeNavbar = () => {
    setIsOpen(false);
    navRef.current.classList.remove("responsive_nav");
  };

  return (
    <header className="header">
      <div className="navbar">
        <nav ref={navRef} className="nav-links">
          <li
            type="button"
            onClick={() => handleNavigation("/")}
            className="name_logo"
          >
            MANOHAR JUNGA
          </li>
          <button type="button" onClick={() => handleNavigation("/about")}>
            <span className="span-mother">
              <span>A</span>
              <span>B</span>
              <span>O</span>
              <span>U</span>
              <span>T</span>
            </span>
            <span className="span-mother2">
              <span>A</span>
              <span>B</span>
              <span>O</span>
              <span>U</span>
              <span>T</span>
            </span>
          </button>
          <button type="button" onClick={() => handleNavigation("/projects")}>
            <span className="span-mother">
              <span>P</span>
              <span>R</span>
              <span>O</span>
              <span>J</span>
              <span>E</span>
              <span>C</span>
              <span>T</span>
              <span>S</span>
            </span>
            <span className="span-mother2">
              <span>P</span>
              <span>R</span>
              <span>O</span>
              <span>J</span>
              <span>E</span>
              <span>C</span>
              <span>T</span>
              <span>S</span>
            </span>
          </button>
          <button type="button" onClick={() => handleNavigation("/contact")}>
            <span className="span-mother">
              <span>C</span>
              <span>O</span>
              <span>N</span>
              <span>T</span>
              <span>A</span>
              <span>C</span>
              <span>T</span>
            </span>
            <span className="span-mother2">
              <span>C</span>
              <span>O</span>
              <span>N</span>
              <span>T</span>
              <span>A</span>
              <span>C</span>
              <span>T</span>
            </span>
          </button>
        </nav>
        <button className="nav-btn" type="button" onClick={toggleNavbar}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </header>
  );
}

export default Navbar;
