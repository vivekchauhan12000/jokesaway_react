import React from 'react'
import {Link} from 'react-router-dom';

export default function Navbar() {
  return (
    <div >
    <nav >
    <div className="nav-wrapper teal lighten-2">
      <div className="container">
      <Link to="/" className="brand-logo center">Fun on names</Link>
    
      <ul  className="center hide-on-med-and-down">
        <li>
          <Link to="/" >Home</Link>
          </li>
       
        <li>
          <Link to="/Sarcasm">Nerd</Link>
          </li>

          <li>
          <Link to="/about">About</Link>
          </li>  
      </ul>
      </div>
    </div>
  </nav>

 
</div>
    
  )
}
