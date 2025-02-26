import React from "react";
import "./navbar.scss"

function Navbar() {
    return <nav className="navbar">
      <div className="navbar-logo">
      <img src="./img/logo.png" alt="logo kasa" />
      </div>
      <div className="link-navbar">
      <div>Accueil </div>
      <div>A Propos</div>
      </div>
    </nav>;
  }
  export default Navbar;