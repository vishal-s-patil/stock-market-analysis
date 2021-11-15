import React, {useState} from 'react'
import Navbar from './Navbar/Navbar'
function NameForm(){
 
  const [name,  setName] = useState("")

  const [pass,  setPass] = useState("")

  const [searchBox,  setSearchBox] = useState("")

  const [suggestion,  setSuggestion] = useState({
    bestMatches:
        [
        {'instrument_name' :""},
        {'instrument_name' :""},
        {'instrument_name' :""},
        {'instrument_name' :""},
        {'instrument_name' :""},
        {'instrument_name' :""},
        {'instrument_name' :""},
        {'instrument_name' :""}]})

  let handleNameChange = e => {
    e.persist();
    setName(e.target.value);
  };

  let handlePssChange = e => {
    e.persist();
    setPass(e.target.value);
  };

  let handleSearchBoxChange = async (e) => {
    e.persist();
    
    fetch(`http://localhost:3000/getCompanyName?keyword=${e.target.value}`)
    .then(res => res.json())
    .then(data => {
      console.log(data);
      setSuggestion(data)
    })
    setSearchBox(e.target.value);
  }

  let handleSubmit = (event) => {

    fetch('http://localhost:3000/login', {
      method : "POST",
      mode: 'cors',
      body : JSON.stringify({name : name, pass : pass}),
      headers: {'Content-Type' : 'application/json'}
      
    })
    .then(response => response.json())
    .catch(er => console.log(er)); 

    fetch(`http://localhost:3000/getScrapedData?cName=${searchBox}`)
    .then(res => res.json())
    .then(data => {
      console.log(data)
    })
    
    event.preventDefault();
  }
  
  let handleSuggestionClick = (e) => {
    // let CNAME = e.target.textContent.split(",")[0].trim() || "";
    let CSYMBOL = e.target.textContent.split(",")[1].trim() || "";
    // let CExchange = e.target.textContent.split(",")[2].trim() || "";
    console.log(CSYMBOL);
    fetch(`http://localhost:3000/getCompanyDetails/?cSymbol=${CSYMBOL}`)
    .then(res => res.json())
    .then(data => {
      if (Object.keys(data).length === 0){
        fetch(`http://localhost:3000/getScrapedData?cName=${CSYMBOL}`)
        .then(response => response.json())
        .then(scraped_data => {
          console.log(scraped_data);
        })
      }
      else {
        console.log(data);
      }
    })
    e.preventDefault();
  }
  
  return (
    <>
      <Navbar/>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={name || ''} onChange={handleNameChange}/>
          pass:
          <input type="text" name="pass" value={pass || ''} onChange={handlePssChange}/>
          search:
          <input type="text" name="search" value={searchBox || ''} onChange={handleSearchBoxChange}/>
          <input type="submit" value="search" />
          
         
        </label>
        <h1>hi</h1>
        <ul>
          <li className="myList" onClick={handleSuggestionClick}>{suggestion && suggestion.data && suggestion.data[0] && suggestion.data[0]['instrument_name']},{suggestion.data && suggestion.data[0] && suggestion.data[0]['symbol']},{suggestion.data && suggestion.data[0] && suggestion.data[0]['exchange']}</li>
          <li className="myList" onClick={handleSuggestionClick}>{suggestion && suggestion.data && suggestion.data[1] && suggestion.data[1]['instrument_name']},{suggestion.data && suggestion.data[1] && suggestion.data[1]['symbol']},{suggestion.data && suggestion.data[1] && suggestion.data[1]['exchange']}</li>
          <li className="myList" onClick={handleSuggestionClick}>{suggestion && suggestion.data && suggestion.data[2] && suggestion.data[2]['instrument_name']},{suggestion.data && suggestion.data[2] && suggestion.data[2]['symbol']},{suggestion.data && suggestion.data[2] && suggestion.data[2]['exchange']}</li>
          <li className="myList" onClick={handleSuggestionClick}>{suggestion && suggestion.data && suggestion.data[3] && suggestion.data[3]['instrument_name']},{suggestion.data && suggestion.data[3] && suggestion.data[3]['symbol']},{suggestion.data && suggestion.data[3] && suggestion.data[3]['exchange']}</li>
          <li className="myList" onClick={handleSuggestionClick}>{suggestion && suggestion.data && suggestion.data[4] && suggestion.data[4]['instrument_name']},{suggestion.data && suggestion.data[4] && suggestion.data[4]['symbol']},{suggestion.data && suggestion.data[4] && suggestion.data[4]['exchange']}</li>
          <li className="myList" onClick={handleSuggestionClick}>{suggestion && suggestion.data && suggestion.data[5] && suggestion.data[5]['instrument_name']},{suggestion.data && suggestion.data[5] && suggestion.data[5]['symbol']},{suggestion.data && suggestion.data[5] && suggestion.data[5]['exchange']}</li>
          <li className="myList" onClick={handleSuggestionClick}>{suggestion && suggestion.data && suggestion.data[6] && suggestion.data[6]['instrument_name']},{suggestion.data && suggestion.data[6] && suggestion.data[6]['symbol']},{suggestion.data && suggestion.data[6] && suggestion.data[6]['exchange']}</li>
          <li className="myList" onClick={handleSuggestionClick}>{suggestion && suggestion.data && suggestion.data[7] && suggestion.data[7]['instrument_name']},{suggestion.data && suggestion.data[7] && suggestion.data[7]['symbol']},{suggestion.data && suggestion.data[7] && suggestion.data[7]['exchange']}</li>
        </ul>
      </form>
    </>
  )
}
export default NameForm 