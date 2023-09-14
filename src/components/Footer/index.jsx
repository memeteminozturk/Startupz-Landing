import React from "react";
import "./style.scss";
import logo from "../../assets/images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          <div className="footer__logo--list">
            <div className="footer__logo">
              <img src={logo} alt="logo" />
            </div>
            <div className="footer__text">
              <p>
                © 2020 Startupz. <br /> All rights reserved.
              </p>
            </div>
          </div>
          <div className="footer__list">
            <h4 className="footer__list--title">Companies</h4>
            <ul className="footer__list--items">
              <li className="footer__list--item">Tolq</li>
              <li className="footer__list--item">LegalSite</li>
              <li className="footer__list--item">Codekeeper</li>
              <li className="footer__list--item">Feedback Labs</li>
            </ul>
          </div>
          <div className="footer__list">
            <h4 className="footer__list--title">Contact</h4>
            <ul className="footer__list--items">
              <li className="footer__list--item">
                World Trade Center - The Hague
              </li>
              <li className="footer__list--item">
                Prinses Margrietplantsoen 33
              </li>
              <li className="footer__list--item">2595 AM The Hague</li>
              <li className="footer__list--item">The Netherlands</li>
              <li className="footer__list--item">Send us an email</li>
            </ul>
          </div>
          <div className="footer__social footer__list">
            <h4 className="footer__social--title footer__list--title">
              Follow us
            </h4>
            <ul className="footer__social--items footer__list--items">
              <li className="footer__social--item footer__list--item">
                <a href="https://twitter.com/" target="_blank">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
              </li>
              <li className="footer__social--item footer__list--item">
                <a
                  href="https://www.linkedin.com/in/memet-emin-%C3%B6zt%C3%BCrk-a14a7a224/"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
              </li>
              <li className="footer__social--item footer__list--item">
                <a href="https://www.instagram.com/" target="_blank">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
