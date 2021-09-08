import React from 'react'
import { Link } from "react-router-dom";



const Error = () => {
    return (
        <div>
           <div className="Main" >
        <div className=" error team-1 py-4 md:py-12 bg-gray-100">


<p class="title">Oh no!!</p>
<p class="subtitle">
	You’re either misspelling the URL <br /> or requesting a page that's no longer here.
</p>
<div align="center">
	
    <Link to="/" className="btn-back">
            Go To Home
          </Link>
</div>
<img src="https://assets.codepen.io/1538474/astronaut.svg" class="astronaut" />

        </div>
            </div> 
        </div>
    )
}

export default Error
