import React from "react";
import HeaderImage from "../assets/IMG_2441.JPG";

const Landing = () => {
  return (
    <section id="landing">
      <header>
        <div className="header__container">
          <figure className="header__image--wrapper">
          <img src={HeaderImage} alt="" className="header__image" />
          </figure>
          <div className="header__text--container">
          <div className="header__text">
            <h1 className="header__headline">Unterwegs für dein Pferd</h1>
            <h2 className="header__subheadline">
              Pferdephysiotheraphie in Bad Berleburg und Umgebung
            </h2>
            <p className="header__para">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
              quas nihil, est dolores quos quia consequatur earum qui odio odit
              optio dolorum rerum assumenda nobis nemo similique. Ipsum, vero
              illum!
            </p>
            <button className="btn btn__primary">Behandlung buchen</button>
            <a href="#about" className="btn btn__transparent">Mehr erfahren</a>
          </div>
          </div>
        </div>
      </header>
    </section>
  );
};

export default Landing;
