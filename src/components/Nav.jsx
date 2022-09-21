import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import LogoTransparent from "../assets/Firmenlogo transparent.png"
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const Nav = () => {
    function openMenu() {
        console.log('tkae')
        document.body.classList += " menu--open";
      
      }
    
      function closeMenu() {
        document.body.classList.remove("menu--open");
      }
    return (
       <nav>
            <div className="nav__container">
                <Link to="/">
                    <img src={LogoTransparent} alt="" className="logo" />
                </Link>
                <ul className="nav__links">
                    <li className="nav__list">
                        <Link to="/" className="nav__link">
                            Home
                        </Link>
                    </li>
                    <li className="nav__list">
                        <Link to="/about" className="nav__link">
                            Über mich
                        </Link>
                    </li>
                    <li className="nav__list">
                        <Link to="/leistungen" className="nav__link">
                            Leistungen
                        </Link>
                    </li>
                    <li className="nav__list">
                        <Link to="/preise" className="nav__link">
                            Preise
                        </Link>
                    </li>
                    <li className="nav__list">
                        <Link to="/kontakt" className="nav__link nav__link--primary">
                            Kontakt
                        </Link>
                    </li>
                </ul>
                <button className="btn__menu" onClick={openMenu}>
                <FontAwesomeIcon icon={faBars}/>
            </button>
            <div className="menu__backdrop">
              <button className="btn__menu btn__menu--close" onClick={closeMenu}>
                <FontAwesomeIcon icon={faTimes}/>
              </button>
              <ul className="menu__links">
                <li className="menu__list"><Link to="/" className="menu__link" onClick={closeMenu}>Home</Link></li>
                <li className="menu__list"><Link to="/about" className="menu__link" onClick={closeMenu}>Über mich</Link></li>
                <li className="menu__list"><Link to="/leistungen" className="menu__link" onClick={closeMenu}>Leistungen</Link></li>
                <li className="menu__list"><Link to="/preise" className="menu__link" onClick={closeMenu}>Preise</Link></li>
                <li className="menu__list"><Link to="/kontakt" className="menu__link" onClick={closeMenu}>Kontakt</Link></li>
              </ul>
            </div>
            </div>
        </nav>
    );
}

export default Nav;
