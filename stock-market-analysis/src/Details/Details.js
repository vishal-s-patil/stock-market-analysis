import React from 'react'
import './Details.css'
import {Link, useLocation} from "react-router-dom";

export default function Details(props) {
    
    const location = useLocation() 
    console.log(location.state)

    return (
        <>
            <div className="DetailsContainer">
                <span>BANKNAME</span>
                <ul>
                    <li>
                        name : data
                    </li>
                    <li>
                        name : data
                    </li>
                    <li>
                        name : data
                    </li>
                    <li>
                        name : data
                    </li>
                    <li>
                        name : data
                    </li>
                    <li>
                        name : data
                    </li>
                    <li>
                        name : data
                    </li>
                    <li>
                        name : data
                    </li>
                    <li>
                        name : data
                    </li>
                </ul>
                <Link to="/" id="linkId">Clear</Link>
            </div>
        </>
    )
}

