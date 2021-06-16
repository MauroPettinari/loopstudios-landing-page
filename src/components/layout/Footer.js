import React from "react";

import logo from "../../assets/images/logo.svg";
import twitterLogo from "../../assets/images/icon-twitter.svg";
import facebookLogo from "../../assets/images/icon-facebook.svg";
import instagramLogo from "../../assets/images/icon-instagram.svg";
import pinterestLogo from "../../assets/images/icon-pinterest.svg";

export const Footer = () => {
  return (
    <footer>
      <img className="logo" src={logo} alt="loopstudios logo" />
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
      <div className="socials">
        <img src={facebookLogo} alt="Facebook logo"/>
        <img src={twitterLogo} alt="Twitter logo"/>
        <img src={pinterestLogo} alt="Pinterest logo"/>
        <img src={instagramLogo} alt="Instagram logo"/>
      </div>
      <small className="copyright">
        © 2021 Loopstudios. All rights reserved.
      </small>
    </footer>
  );
};
