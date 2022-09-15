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
            <a href="#" className="link">
              <h3 className="link__h3">Home</h3>
              <ul class="link__ul">
                <li class="link__li">
                  <a href="#testimonials" class="link__anchor">
                    Referenzen
                  </a>
                </li>
                <li class="link__li">
                  <a href="#faq" class="link__anchor">
                    FAQ
                  </a>
                </li>
              </ul>
            </a>
            <a href="#about" className="link">
              <h3 className="link__h3">Über mich</h3>
              <ul class="link__ul">
                <li class="link__li">
                  <a href="#testimonials" class="link__anchor">
                    Motivation
                  </a>
                </li>
                <li class="link__li">
                  <a href="#testimonials" class="link__anchor">
                    Werte
                  </a>
                </li>
                <li class="link__li">
                  <a href="#faq" class="link__anchor">
                    Qualifikationen
                  </a>
                </li>
              </ul>
            </a>
            <a href="#" className="link">
              <h3 className="link__h3">Leistungen</h3>
              <ul class="link__ul">
                <li class="link__li">
                  <a href="#testimonials" class="link__anchor">
                    Pferdephysio
                  </a>
                </li>
                <li class="link__li">
                  <a href="#faq" class="link__anchor">
                    Osteopathie
                  </a>
                </li>
              </ul>
            </a>
            <a href="#" className="link">
              <h3 className="link__h3">Preise</h3>
              <ul class="link__ul">
                <li class="link__li">
                  <a href="#testimonials" class="link__anchor">
                    Preisliste
                  </a>
                </li>
                <li class="link__li">
                  <a href="#faq" class="link__anchor">
          
                  </a>
                </li>
              </ul>
            </a>
            <a href="#" className="link">
              <h3 className="link__h3">Kontakt</h3>
              <ul class="link__ul">
                <li class="link__li">
                  <a href="#testimonials" class="link__anchor">
                    0172 9318571
                  </a>
                </li>
                <li class="link__li">
                  <a href="#faq" class="link__anchor">
                    marburger@pferdetherapie.de
                  </a>
                </li>
              </ul>
            </a>
            <div className="link">
              <h3 className="link__h3 no-link">Legal</h3>
              <ul class="link__ul">
                <li class="link__li">
                  <a href="#testimonials" class="link__anchor">
                    Impressum
                  </a>
                </li>
                <li class="link__li">
                  <a href="#faq" class="link__anchor">
                    Datenschutz
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer__info">
            <div className="footer__logo--wrapper">
                <a href="#">
              <img className="footer__logo" src={LogoTransparent} alt="" />
              <div className="footer__logo--text"></div>
              </a>
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
