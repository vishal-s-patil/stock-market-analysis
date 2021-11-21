import React, { useState } from 'react'
import Navbar from './Navbar/Navbar'
// import News from './News/News';
import Home from './Home/Home';
import Contact from './Contact/Contact';
import Details from './Details/Details';
import './App.css'
import background from "./Images/bgImage.png";
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import {Switch} from "react-router";

function NameForm(){

  const [makeEmpty, setMakeEmpty] = useState(false)

  return (

    <>
    <Router>
    <div className="bgImg">
      <img src={background} alt="" />
    </div>
    <Navbar/>
      <Switch>
    
          <Route exact path="/">
              <Home  setMakeEmpty={setMakeEmpty}/>
          </Route>

          <Route exact path="/News">
            {/* <News/> */}
          </Route>

          <Route exact path="/About">
            <About/>
          </Route>

          <Route exact path="/Contact" >
            <Contact/>
          </Route>

          <Route exact path="/Details" >
            <Details/>
          </Route>

      </Switch>
    </Router>
    </>
  )
}

function About() {
  return(
    <>
      <h1>skdjvsldnb</h1>
    </>
  );
}

function Empty() {
  return(
    <>
      
    </>
  );
}



export default NameForm 