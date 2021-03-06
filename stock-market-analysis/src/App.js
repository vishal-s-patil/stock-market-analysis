import React, {useState} from 'react'
import Navbar from './Components/Navbar/Navbar'
import News from './Components/News/News'
import Subscribe from './Components/Subscribe/Subscribe';
import Home from './Components/Home/Home';
import Contact from './Components/Contact/Contact';
import Details from './Components/Details/Details';
import About from './Components/About/About';
// import background from './Images/bgImg.png';
import './App.css'
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
    {/* <div className="bgImg">
      <img src={background} alt="" />
    </div> */}
    <Navbar/>
      <Switch>
    
          <Route exact path="/">
              <Home  setMakeEmpty={setMakeEmpty}/>
          </Route>

          <Route exact path="/News">
            <News/>
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

          <Route exact path="/Subscribe" >
            <Subscribe/>
          </Route>

      </Switch>
    </Router>
    </>
  )
}


export default NameForm 