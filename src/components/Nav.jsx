import React from 'react';
import Logo from "../assets/Firmenlogo Bilddatei.png"

const Nav = () => {
    return (
        <nav>
            <div className="nav__container">
                <a href="/">
                    <img src={Logo} alt="" className="logo" />
                </a>
                <ul className="nav__links">
                    <li className="nav__list">
                        <a href="" className="nav__link">
                            Home
                        </a>
                    </li>
                    <li className="nav__list">
                        <a href="" className="nav__link">
                            Über mich
                        </a>
                    </li>
                    <li className="nav__list">
                        <a href="" className="nav__link">
                            Leistungen
                        </a>
                    </li>
                    <li className="nav__list">
                        <a href="" className="nav__link">
                            Preise
                        </a>
                    </li>
                    <li className="nav__list">
                        <a href="" className="nav__link nav__link--primary">
                            Kontakt
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;