import React from "react";

import logo from "../../assets/images/logo.svg";
import mobile_menu from "../../assets/images/icon-hamburger.svg";

export const Navbar = () => {
  return (
    <header className="navbar">
      <img className="logo" src={logo} alt="logo"></img>
      <img
        className="mobile-menu"
        src={mobile_menu}
        alt="Mobile menu"
      ></img>
      <nav>
        <ul className="nav-list">
          <li className="nav-list-item">
            <a href="#about">About</a>
          </li>
          <li className="nav-list-item">
            <a href="#careers">Careers</a>
          </li>
          <li className="nav-list-item">
            <a href="#events">Events</a>
          </li>
          <li className="nav-list-item">
            <a href="#products">Products</a>
          </li>
          <li className="nav-list-item">
            <a href="#support">Support</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
