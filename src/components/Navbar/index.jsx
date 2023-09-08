import React from "react";
import Logo from "../../assets/images/logo.png";
import "./style.scss";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container navbar__container">
        <div className="navbar__logo">
          <img src={Logo} alt="Logo" />
        </div>
        <div className="navbar__menu">
          <ul>
            <li>
              <a href="#">Startupz</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#" className="navbar__menu--btn">
                Work with us!
              </a>
            </li>
          </ul>
        </div>

        <div className="navbar__burger">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="navbar__burger--close">
          <span></span>
          <span></span>
        </div>
        <div className="navbar__burger--menu">
          <div className="navbar__menu--hamburger--menu--logo">
            <img src={Logo} alt="Logo" />
          </div>
          <div className="navbar__menu--hamburger--menu--close">
            <span></span>
            <span></span>
          </div>
          <ul>
            <li>
              <a href="#">Startupz</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Work with us!</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
