import React from 'react'
import'./Navbar.css'
import { Link } from 'react-router-dom';

export default function Navbar(props){
 
  return (
    <div>
       <nav className={`cute-navbar-${props.mode}`}>
      <div className="logo">🌸 CutieNav</div>
      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/">Services</a></li>
        <li><a href="/">Contact</a></li>

    <div class="form-check form-switch">
  <input class="form-check-input" type="checkbox" role="switch" id="switchCheckDefault" onChange={props.handletoggle}/>
  <label class="form-check-label" for="switchCheckDefault">enable dark mode</label>
</div>


      </ul>
    </nav>


    
 
     
       
    </div>
  )
}


