import React from 'react';
import HeaderImage from "../assets/IMG_2408.JPG"

const Landing = () => {
    return (
        <section id='landing'>
            <header>
                <div className="header__container">
                    <img src={HeaderImage} alt="" className='header__image'/>
                    <h1 className='header__headline'>Jasmin ist krass</h1>
                </div>
            </header>
        </section>
    );
}

export default Landing;
