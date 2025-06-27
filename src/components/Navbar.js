import React from 'react'
import'./Navbar.css'
import { Link } from 'react-router-dom';

export default function Navbar(props){
 
  return (
    <div>
       <nav className={`cute-navbar-${props.mode}`}>
      <div className="logo">🌸 CutieNav</div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/">Services</Link></li>
        <li><Link to="/">Contact</Link></li>

    <div class="form-check form-switch">
  <input class="form-check-input" type="checkbox" role="switch" id="switchCheckDefault" onChange={props.handletoggle}/>
  <label class="form-check-label" for="switchCheckDefault">enable dark mode</label>
</div>


      </ul>
    </nav>


    
 
     
       
    </div>
  )
}


