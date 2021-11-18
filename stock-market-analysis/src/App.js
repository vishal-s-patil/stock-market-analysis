import React from 'react'
import Navbar from './Navbar/Navbar'
// import News from './News/News';
import Home from './Home/Home';
import Contact from './Contact/Contact';
import './App.css'
import background from "./Images/bgImage.png";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function NameForm(){
  return (
    <>
    <Router>
    <div className="bgImg">
      <img src={background} alt="" />
    </div>
    <Navbar/>
      <Routes>

          <Route exact path="/" element={<Home />} />

          {/* <Route exact path="/News" element={<News />} /> */}

          <Route exact path="/About" element={<About />} />

          <Route exact path="/Contact" element={<Contact />} />

      </Routes>
    </Router>
    </>
  )
}

function About() {
  return <h2>About</h2>;
}

export default NameForm 