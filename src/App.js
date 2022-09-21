import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import "./index.css";
import Home from "./pages/Home"
import About from "./pages/About"
import Kontakt from "./pages/Kontakt";
import Leistungen from "./pages/Leistungen";
import Preise from "./pages/Preise";
import Leistung from "./pages/Leistung";


function App() {
  return (
    <div className="App">
      <Router>
        <Nav/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/leistungen" element={<Leistungen/>}/>
          <Route path="/leistungen/:name" element={<Leistung/>}/>
          <Route path="/preise" element={<Preise/>}/>
          <Route path="/kontakt" element={<Kontakt/>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
