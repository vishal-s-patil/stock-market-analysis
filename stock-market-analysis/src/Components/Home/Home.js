import React, {useState} from 'react'
import {useHistory} from "react-router-dom"; 
import './Home.css'

export default function Home(props) {

  const [data, setData] = useState(null)

  let history = useHistory()

  const [showDetails, setShowDetails] = useState(false)

  const [showSuggestion, setShowSuggestion] = useState([false, false, false, false, false, false])

  const [name,  setName] = useState("")

  const [pass,  setPass] = useState("")

  const [searchBox,  setSearchBox] = useState("")

  const [suggestion,  setSuggestion] = useState({
    data:
        [ ]})

  let handleSearchBoxChange = (e) => {
    e.persist();
    
    fetch(`http://localhost:3000/getCompanyName?keyword=${e.target.value}`)
    .then(res => res.json())
    .then(data => {
      setSuggestion(data)
      console.log(data);
      let len = data.data.length
      let myArr1 = []
      for (let i = 0; i < len; i++) {
        myArr1.push(true)
      }
      for (let i = 0; i < 8-len; i++) {
        myArr1.push(false)
      }
      setShowSuggestion(myArr1)
    })
    setSearchBox(e.target.value);
  }

  let handleSubmit = (event) => {

        fetch(`http://localhost:3000/getScrapedData?cName=${searchBox}`)
        .then(res => res.json())
        .then(data => {
          console.log(data)
          setData(data)
          props.setMakeEmpty(true)
          setShowDetails(true)
          history.push(
            {
                pathname: '/Details',
                state: data
            }
          )
        })
    event.preventDefault();
  }
  

  
  let handleSuggestionClick = (e) => {
    // let CNAME = e.target.textContent.split(",")[0].trim() || "";
    let CSYMBOL = e.target.textContent.split(",")[1].trim() || "";
    // let CExchange = e.target.textContent.split(",")[2].trim() || "";
    let inputBox = document.getElementById("search");
    inputBox.value = CSYMBOL;
    setSearchBox(CSYMBOL)
    console.log(CSYMBOL);
    fetch(`http://localhost:3000/getScrapedData?cName=${CSYMBOL}`)
    .then(res => res.json())
    .then(data => {
      console.log(data);
    })
    e.preventDefault();
  }

    return (
        <>
        <div className="homeContainer">
        <form onSubmit={handleSubmit}>
                <label htmlFor="search" style={{display : "block"}}> search stock here</label>
                <input type="text" name="search" id="search" placeholder="Enter stock name" value={searchBox || ''} onChange={handleSearchBoxChange}/>
                
                <button type="submit" onClick={handleSubmit}>Search</button>
                {/* {showDetails ? <Details data={data}/> : null} */}
              <ul>
                <li className="myList" onClick={handleSuggestionClick}>{suggestion && suggestion.data && suggestion.data[0] && suggestion.data[0]['instrument_name']} {showSuggestion[0] ? "," : ""} {suggestion && suggestion.data && suggestion.data[0] && suggestion.data[0]['symbol']} {showSuggestion[0] ? "," : ""} {suggestion && suggestion.data && suggestion.data[0] && suggestion.data[0]['exchange']}</li>
                <li className="myList" onClick={handleSuggestionClick}>{suggestion && suggestion.data && suggestion.data[1] && suggestion.data[1]['instrument_name']} {showSuggestion[1] ? "," : ""} {suggestion && suggestion.data && suggestion.data[1] && suggestion.data[1]['symbol']} {showSuggestion[1] ? "," : ""} {suggestion && suggestion.data && suggestion.data[1] && suggestion.data[1]['exchange']}</li>
                <li className="myList" onClick={handleSuggestionClick}>{suggestion && suggestion.data && suggestion.data[2] && suggestion.data[2]['instrument_name']} {showSuggestion[2] ? "," : ""} {suggestion && suggestion.data && suggestion.data[2] && suggestion.data[2]['symbol']} {showSuggestion[2] ? "," : ""} {suggestion && suggestion.data && suggestion.data[2] && suggestion.data[2]['exchange']}</li>
                <li className="myList" onClick={handleSuggestionClick}>{suggestion && suggestion.data && suggestion.data[3] && suggestion.data[3]['instrument_name']} {showSuggestion[3] ? "," : ""} {suggestion && suggestion.data && suggestion.data[3] && suggestion.data[3]['symbol']} {showSuggestion[3] ? "," : ""} {suggestion && suggestion.data && suggestion.data[3] && suggestion.data[3]['exchange']}</li>
                <li className="myList" onClick={handleSuggestionClick}>{suggestion && suggestion.data && suggestion.data[4] && suggestion.data[4]['instrument_name']} {showSuggestion[4] ? "," : ""} {suggestion && suggestion.data && suggestion.data[4] && suggestion.data[4]['symbol']} {showSuggestion[4] ? "," : ""} {suggestion && suggestion.data && suggestion.data[4] && suggestion.data[4]['exchange']}</li>
                <li className="myList" onClick={handleSuggestionClick}>{suggestion && suggestion.data && suggestion.data[5] && suggestion.data[5]['instrument_name']} {showSuggestion[5] ? "," : ""} {suggestion && suggestion.data && suggestion.data[5] && suggestion.data[5]['symbol']} {showSuggestion[5] ? "," : ""} {suggestion && suggestion.data && suggestion.data[5] && suggestion.data[5]['exchange']}</li>
                <li className="myList" onClick={handleSuggestionClick}>{suggestion && suggestion.data && suggestion.data[6] && suggestion.data[6]['instrument_name']} {showSuggestion[7] ? "," : ""} {suggestion && suggestion.data && suggestion.data[6] && suggestion.data[6]['symbol']} {showSuggestion[6] ? "," : ""} {suggestion && suggestion.data && suggestion.data[6] && suggestion.data[6]['exchange']}</li>
                <li className="myList" onClick={handleSuggestionClick}>{suggestion && suggestion.data && suggestion.data[7] && suggestion.data[7]['instrument_name']} {showSuggestion[8] ? "," : ""} {suggestion && suggestion.data && suggestion.data[7] && suggestion.data[7]['symbol']} {showSuggestion[7] ? "," : ""} {suggestion && suggestion.data && suggestion.data[7] && suggestion.data[7]['exchange']}</li>
              </ul>
          </form>
        </div>
          
        </>
    )
}

