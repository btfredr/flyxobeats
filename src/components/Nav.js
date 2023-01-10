import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useRef } from "react";

const Nav = () => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsiveNav");
  };

  return (
    <header>
      <h3>Flyxo</h3>
      <nav ref={navRef}>
        <button onClick={showNavbar} className="nav-btn nav-close-btn">
          <FaTimes />
        </button>
        <a href="#discography" onClick={showNavbar}>
          Discography
        </a>
        <a href="#about" onClick={showNavbar}>
          About
        </a>
        <a href="/" onClick={showNavbar}>
          Contact
        </a>
      </nav>
      <button onClick={showNavbar} className="nav-btn">
        <FaBars />
      </button>
    </header>
  );
};

export default Nav;
