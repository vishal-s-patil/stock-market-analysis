import React, {useState} from 'react'
import './Contact.css'

export default function Contact() {
    return (
        <>
            <div className="contactContainer">
                <form action="">
                    <div>
                        <label htmlFor="name" style = {{ whiteSpace: "pre" }}>Name : {`${'            '}`}</label>
                        <input type="text" name="name" id="name" /> 
                    </div>
                    <div id="phnodiv">
                        <label htmlFor="phno" style = {{ whiteSpace: "pre" }}>Phone no. : {`${'    '}`}</label>
                        <input type="number" name="phno" id="phno" />
                    </div>
                    <div>
                        <label htmlFor="email" style = {{ whiteSpace: "pre" }}>Email : {`${'             '}`}</label>
                        <input type="email" name="email" id="email" />
                    </div>
                    <div>
                        <label htmlFor="name" style = {{ whiteSpace: "pre" }}>Name : {`${'            '}`}</label>
                        <input type="text" name="name" id="name" />
                    </div>
                    <label htmlFor="message">write ur quary here : </label>
                    <div>
                        <textarea rows="10" cols="30" name="message" id="message">
                        </textarea>
                    </div>
                </form>
            </div>
        </>
    )
}

