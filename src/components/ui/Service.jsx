import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import ServiceImage from "../assets/IMG_2312.JPG";
import {faAngleRight} from '@fortawesome/free-solid-svg-icons'

const Service = ({ServiceImage, ServiceName, ServicePara}) => {
    return (
        <div className="service">
          <div className="service__content">
        <figure className="service__img__wrapper">
          <img src={ServiceImage} alt="" className='service__img'/>
        </figure>
        <div className="service__text">
        <h3 className="service__name">{ServiceName}</h3>
        <p className="section__para service__para">
          {ServicePara}
        </p>
        <a href="/" className='service__link'>
          Mehr erfahren
          <FontAwesomeIcon icon={faAngleRight} className="service__link--arrow"/>
          </a>
      </div>
      </div>
      </div>
    );
}

export default Service;