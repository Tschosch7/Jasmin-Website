import React from 'react';
import ServiceImage from "../assets/IMG_2312.JPG";

const Service = () => {
    return (
        <div className="service">
        <figure className="service__img__wrapper">
          <img src={ServiceImage} alt="" />
        </figure>
        <h3 className="service__name">Bein reparieren</h3>
        <p className="section__para">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Inventore quo suscipit nulla optio quis! Nostrum, quidem nisi
          cum culpa consectetur nam illum veritatis deleniti repellat vero
          nihil voluptatibus aliquam voluptatum?
        </p>
        <a href="/">Read more</a>
      </div>
    );
}

export default Service;
