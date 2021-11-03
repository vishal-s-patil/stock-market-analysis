import React, {useState} from 'react'
function NameForm(){

  const [name,  setName] = useState("")

  const [pass,  setPass] = useState("")

  let handleNameChange = e => {
    e.persist();
    setName(e.target.value);
  };

  let handlePssChange = e => {
    e.persist();
    setPass(e.target.value);
  };

  let handleSubmit = (event) => {

    fetch('http://localhost:3000/login', {
      method : "POST",
      mode: 'cors',
      body : JSON.stringify({name : name, pass : pass}),
      headers: {'Content-Type' : 'application/json'}
      
    })
    .then(response => response.json())
    .then(console.log("hi")).
    catch(er => console.log(er)); 
    
    event.preventDefault();
  }
  
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={name || ''} onChange={handleNameChange}/>
          pass:
          <input type="text" name="pass" value={pass || ''} onChange={handlePssChange}/>
        </label>
        <input type="submit" value="Submit" />
      </form>
    </>
  )
}
export default NameForm