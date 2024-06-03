import React from "react";
import { Link } from "react-router-dom";

function Navigation (){
    return(
        <nav className="app-nav">
            <h2 className="logo">Health YOU</h2>
            <Link to="/" >Home</Link>
            <Link to="/about">About</Link>
            <Link to="/login">Login</Link>
        </nav>
    );
}

export default Navigation;