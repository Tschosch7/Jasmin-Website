import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar,   faArrowRight,
    faArrowLeft, faChevronDown, faPhone } from '@fortawesome/free-solid-svg-icons'

const ContactButton = () => {
    return (
        <a href="#">
            <button className='mail__btn'>
                <FontAwesomeIcon icon={faPhone} />
            </button>
        </a>
    );
}

export default ContactButton;
