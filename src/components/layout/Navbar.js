import React, { useState } from "react";

import { MobileMenu } from "./MobileMenu";

import logo from "../../assets/images/logo.svg";
import mobile_menu from "../../assets/images/icon-hamburger.svg";


export const Navbar = () => {
  const [showMenu, setShowMenuState] = useState(false)

  const openMobileMenu = () => {
    setShowMenuState(!showMenu);
  }

  const hideMenu = () => {
    setShowMenuState(!showMenu);
  }

  return (
    <header className="navbar">
      <img className="logo" src={logo} alt="loopstudios logo"></img>
      <img
        className="hamburger-mobile-menu"
        src={mobile_menu}
        alt="Mobile menu"
        onClick={ openMobileMenu }
      ></img>
      <nav className="nav-desktop">
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
      {
        showMenu && <MobileMenu hideMenu={hideMenu}/>
      }
    </header>
  );
};
