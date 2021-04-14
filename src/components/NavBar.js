import React from "react";
import { Link } from "react-router-dom";


function Navbar() {
  return (
    <nav>
        <Link to="/"><h1>Gillian K. Fitzgerald</h1></Link>
        
        <section>
            <Link to="/aboutMe">About Me</Link>
            <Link to="/myWorkPage">My Work</Link>
            <Link to="/contactMe">Contact Me!</Link>
            
        </section>
    
    </nav>
    
  )
}

export default Navbar;