import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import LogoTransparent from "../assets/Firmenlogo transparent.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faArrowRight,
  faArrowLeft,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer>
      <div className="footer__container">
        <div className="row">
          <div className="links">
            <Link to="/" className="link">
              <h3 className="link__h3">Home</h3>
              <ul className="link__ul">
                <li className="link__li">
                  <Link to="#testimonials" className="link__anchor">
                    Referenzen
                  </Link>
                </li>
                <li className="link__li">
                  <Link to="#faq" className="link__anchor">
                    FAQ
                  </Link>
                </li>
              </ul>
            </Link>
            <Link to="/about" className="link">
              <h3 className="link__h3">Über mich</h3>
              <ul className="link__ul">
                <li className="link__li">
                  <Link to="#testimonials" className="link__anchor">
                    Motivation
                  </Link>
                </li>
                <li className="link__li">
                  <Link to="#testimonials" className="link__anchor">
                    Werte
                  </Link>
                </li>
                <li className="link__li">
                  <Link to="#faq" className="link__anchor">
                    Qualifikationen
                  </Link>
                </li>
              </ul>
            </Link>
            <Link to="/leistungen" className="link">
              <h3 className="link__h3">Leistungen</h3>
              <ul className="link__ul">
                <li className="link__li">
                  <Link to="#testimonials" className="link__anchor">
                    Pferdephysio
                  </Link>
                </li>
                <li className="link__li">
                  <Link to="#faq" className="link__anchor">
                    Osteopathie
                  </Link>
                </li>
              </ul>
            </Link>
            <Link to="/preise" className="link">
              <h3 className="link__h3">Preise</h3>
              <ul className="link__ul">
                <li className="link__li">
                  <Link to="#testimonials" className="link__anchor">
                    Preisliste
                  </Link>
                </li>
                <li className="link__li">
                  <Link to="#faq" className="link__anchor">
          
                  </Link>
                </li>
              </ul>
            </Link>
            <Link to="/kontakt" className="link">
              <h3 className="link__h3">Kontakt</h3>
              <ul className="link__ul">
                <li className="link__li">
                  <Link to="#testimonials" className="link__anchor">
                    0172 9318571
                  </Link>
                </li>
                <li className="link__li">
                  <Link to="#faq" className="link__anchor">
                    Email
                  </Link>
                </li>
              </ul>
            </Link>
            <div className="link">
              <h3 className="link__h3 no-link">Rechtliches</h3>
              <ul className="link__ul">
                <li className="link__li">
                  <Link to="#testimonials" className="link__anchor">
                    Impressum
                  </Link>
                </li>
                <li className="link__li">
                  <Link to="#faq" className="link__anchor">
                    Datenschutz
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer__border"></div>
          <div className="footer__info">
            <div className="footer__logo--wrapper">
                <Link to="#">
              <img className="footer__logo" src={LogoTransparent} alt="" />
              <div className="footer__logo--text"></div>
              </Link>
            </div>
            <div className="copyright">
              &copy;2022 Jasmin Marburger Pferdetherapie
            </div>
            <div className="footer__socials">
              <a
                href="https://www.instagram.com/pferdetherapie.marburger/"
                target="blank_"
              >
                <FontAwesomeIcon icon={faInstagram} className="socials__icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
