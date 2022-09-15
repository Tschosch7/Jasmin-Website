import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import About from './components/About';
import Footer from './components/Footer';
import Landing from './components/Landing';
import Nav from './components/Nav';
import Services from './components/Services';
import Testimonials from "./components/Testimonials";
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar,   faArrowRight,
  faArrowLeft, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import FAQ from "./components/FAQ";
import ContactButton from "./components/ContactButton";

function App() {
  return (
    <div className='App'>
    <Nav />
    <Landing />
    <ContactButton/>
    <About/>
    <Services/>
    <Testimonials/>
    <FAQ/>
    <Footer/>
    </div>
  );
}

export default App;
