import React from "react";
import { Link } from "react-router-dom";
import "./navbar.scss"

function Navbar() {
    return <nav className="navbar">
      <Link to="/">
      <div className="navbar-logo">
      <img src={process.env.PUBLIC_URL + '/img/logo.png'} alt="logo kasa" />
      </div>
      </Link>
      <div className="linkNavbar">
      <Link to="/" >Accueil </Link>
      <Link to="/about" >A Propos</Link>
      </div>
    </nav>;
  }
  export default Navbar;