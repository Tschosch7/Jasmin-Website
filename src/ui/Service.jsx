import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import ServiceImage from "../assets/IMG_2312.JPG";
import {faAngleRight} from '@fortawesome/free-solid-svg-icons'

const Service = () => {
    return (
        <div className="service">
          <div className="service__content">
        <figure className="service__img__wrapper">
          <img src={ServiceImage} alt="" className='service__img'/>
        </figure>
        <div className="service__text">
        <h3 className="service__name">Bein reparieren</h3>
        <p className="section__para service__para">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Inventore quo suscipit nulla optio quis! Nostrum, quidem nisi...
        </p>
        <a href="/" className='service__link'>
          Read more
          <FontAwesomeIcon icon={faAngleRight} className="service__link--arrow"/>
          </a>
      </div>
      </div>
      </div>
    );
}

export default Service;
