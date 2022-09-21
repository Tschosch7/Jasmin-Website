import React, { useEffect, useState } from "react";
import About from "../components/About";
import ContactButton from "../components/ContactButton";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import Landing from "../components/Landing";
import Nav from "../components/Nav";
import Testimonials from "../components/Testimonials";
import Services from "../components/Services";


const Home = () => {

  return (
    <>
      <Landing />
      <ContactButton />
      <About />
      <Services />
      <Testimonials />
      <FAQ />
    </>
  );
};

export default Home;
