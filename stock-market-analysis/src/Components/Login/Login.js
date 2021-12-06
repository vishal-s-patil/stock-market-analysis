import React, {useState} from 'react'
import "./Login.css"

export default function Login() {

    const [name, setName] = useState("")

    const [pass, setPass] = useState("")

    let handleNameChange = (event) => {
        setName(event.target.value);
    }
    let handlePassChange = (event) => {
        setPass(event.target.value);
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
        event.preventDefault()
    }
    return (
        <>
            <div className="Logincontainer">
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name">Name :</label>
                        <input type="email" name="name" id="name" onChange={handleNameChange}/>
                    </div>
                    <div>
                        <label htmlFor="pass">Pass :</label>
                        <input type="pass" name="pass" id="pass" onChange={handlePassChange}/>
                    </div>
                    <button onClick={handleSubmit}>Login</button>
                </form>

            </div>
        </>
    )
}
