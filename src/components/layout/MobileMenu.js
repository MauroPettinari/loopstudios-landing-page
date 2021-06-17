import React from "react";

import logo from "../../assets/images/logo.svg";
import closeIcon from "../../assets/images/icon-close.svg";

export const MobileMenu = ( {hideMenu} ) => {
    return (
      <div className="mobile-menu">
        <div className="menu-header">
          <img className="logo" src={logo} alt="loopstudios logo" />
          <img
            className="close-icon"
            src={closeIcon}
            alt="close menu icon"
            onClick={hideMenu}
          />
        </div>
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
      </div>
    );
};
