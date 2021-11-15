import React from "react";
import './Navbar.css'

export default function Navbar()
{
    return(
        <>
            <nav className="container">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/">News</a></li>
                    <li><a href="/">Contact</a></li>
                    <li><a href="/">About</a></li>
                    <button className="loginBtn">Login</button>
                </ul>
            </nav>
        </>
    )
}