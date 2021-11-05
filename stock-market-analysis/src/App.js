import React, {useState} from 'react'
function NameForm(){
 
  const [name,  setName] = useState("")

  const [pass,  setPass] = useState("")

  const [searchBox,  setSearchBox] = useState("")

  const [suggestion,  setSuggestion] = useState({
    bestMatches:
        [
        {'2. name' :""},
        {'2. name' :""},
        {'2. name' :""},
        {'2. name' :""},
        {'2. name' :""},
        {'2. name' :""},
        {'2. name' :""},
        {'2. name' :""}]})

  let handleNameChange = e => {
    e.persist();
    setName(e.target.value);
  };

  let handlePssChange = e => {
    e.persist();
    setPass(e.target.value);
  };

  let handleSearchBoxChange = e => {
    e.persist();

    fetch(`http://localhost:3000/suggestion?keyword=${e.target.value}`)
        .then(res => res.json())
        .then(data => {
          setSuggestion(data)
        });
        
        setSearchBox(e.target.value);
        
      };

  let handleSubmit = (event) => {

    fetch('http://localhost:3000/login', {
      method : "POST",
      mode: 'cors',
      body : JSON.stringify({name : name, pass : pass}),
      headers: {'Content-Type' : 'application/json'}
      
    })
    .then(response => response.json())
    .catch(er => console.log(er)); 
    
    event.preventDefault();
  }
  
  let handleSuggestionClick = (e) => {
    console.log(e.target.textContent);
    console.log(suggestion);
    for (let i = 0; i < suggestion.bestMatches.length; i++) {
      if (e.target.textContent.split(",")[0].trim() === suggestion.bestMatches[i]['2. name']){
        // console.log(suggestion.bestMatches[i]['1. symbol'], suggestion.bestMatches[i]['2. name']);
        let symbol = suggestion.bestMatches[i]['1. symbol'];
        // console.log(symbol);
        fetch(`http://localhost:3000/getCompanyDetails?cSymbol=${symbol}`)
        .then(res => res.json())
        .then(data => console.log(data));
        break;
      }
    }
    e.preventDefault();
  }
  
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={name || ''} onChange={handleNameChange}/>
          pass:
          <input type="text" name="pass" value={pass || ''} onChange={handlePssChange}/>
          search:
          <input type="text" name="searchBox" value={searchBox || ''} onChange={handleSearchBoxChange}/>
        </label>
        <input type="submit" value="Submit" />
        <h1>hi</h1>
        <ul>
          <li onClick={handleSuggestionClick}>{suggestion && suggestion.bestMatches[0]['2. name']} , {suggestion.bestMatches[0]['1. symbol']}</li>
          <li onClick={handleSuggestionClick}>{suggestion && suggestion.bestMatches[1]['2. name']} , {suggestion.bestMatches[1]['1. symbol']}</li>
          <li onClick={handleSuggestionClick}>{suggestion && suggestion.bestMatches[2]['2. name']} , {suggestion.bestMatches[2]['1. symbol']}</li>
          <li onClick={handleSuggestionClick}>{suggestion && suggestion.bestMatches[3]['2. name']} , {suggestion.bestMatches[3]['1. symbol']}</li>
          <li onClick={handleSuggestionClick}>{suggestion && suggestion.bestMatches[4]['2. name']} , {suggestion.bestMatches[4]['1. symbol']}</li>
          <li onClick={handleSuggestionClick}>{suggestion && suggestion.bestMatches[5]['2. name']} , {suggestion.bestMatches[5]['1. symbol']}</li>
          <li onClick={handleSuggestionClick}>{suggestion && suggestion.bestMatches[6]['2. name']} , {suggestion.bestMatches[6]['1. symbol']}</li>
          <li onClick={handleSuggestionClick}>{suggestion && suggestion.bestMatches[7]['2. name']} , {suggestion.bestMatches[7]['1. symbol']}</li>
        </ul>
      </form>
    </>
  )
}
export default NameForm