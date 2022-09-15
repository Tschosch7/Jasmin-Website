import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {
  faStar,
  faArrowRight,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import AboutImage from "../assets/IMG_2462.JPG";

const Testimonials = () => {
  return (
    <section id="testimonials">
      <div className="container">
        <div className="row testimonials__row">
          <figure className="testimonials__img--wrapper">
            <img src={AboutImage} alt="" className="img" />
          </figure>
          <div className="testimonials__container">
            <h3 className="section__title">Referenzen</h3>
            <h2 className="section__headline smaller">Dein Pferd ist mir wichtig.</h2>
            <p className="section__para">
              Deshalb sind alle Folgeuntersuchungen innerhalb von 4 Wochen kostenlos!
            </p>
            <div className="testimonial__wrapper">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <div className="testimonial__headline">Meinem Pferd geht es endlich wieder gut.</div>
                <div className="testimonial__para">
                  Sinor Duis aute irure dolor in reprehenderit in voluptate
                  velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                  sint occaecat cupidatat non proident, sunt in culpa qui
                  officia. Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit, sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua. Ut enim ad minim veniam.
                </div>
                <div className="testimonial__person--wrapper">
                  <div className="testimonial__person">
                    <figure className="testimonial__person--img__wrapper">
                      <img
                        src={AboutImage}
                        className="img person__img"
                        alt=""
                      />
                    </figure>
                    <div className="testimonial__person-info">
                      <h5 className="person__name">Charlotte Hale</h5>
                      <p className="person__description">Osteopathische Behandlung</p>
                    </div>
                  </div>
                  <div className="arrow__section">
                    <button className="arrow__btn">
                      <FontAwesomeIcon icon={faArrowLeft} className="arrow"/>
                    </button>
                    <div className="divider"></div>
                    <button className="arrow__btn">
                      <FontAwesomeIcon icon={faArrowRight} className="arrow" />
                    </button>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
