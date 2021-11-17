import React, {useState} from 'react'
import Navbar from './Navbar/Navbar'
import News from './News/News';
import Home from './Home/Home';
import Contact from './Contact/Contact';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function NameForm(){

  return (
    <>
    <Router>
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