import React from "react";
import AboutImage from "../assets/IMG_2462.JPG";

const About = () => {
  return (
    <section id="about">
      <div className="container">
        <div className="row">
          <div className="about__container">
            <figure className="about__img--wrapper">
              <img src={AboutImage} alt="" className="about__img" />
            </figure>
            <div className="about__text--wrapper">
            <h3 className="section__title">Über mich</h3>
              <h2>Pferdephysio und Osteopathie</h2>
              <p className="section__para">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Provident perferendis, sit vitae, necessitatibus illo molestias
                eaque unde, quis quia voluptatem itaque ipsam sequi!
                Consequuntur officia accusantium dolor error iure voluptate.
              </p>
              <button className="btn">Mehr erfahren</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
