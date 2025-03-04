import React from "react";
//import "./App.css";
import Navbar from "../components/nav/Navbar.jsx";
import Footer from "../components/Footer/Footer.jsx";
import "./propos.css";
import Securite from "./Securite/Securite.jsx";
import Service from "./Service/Service.jsx";
import Respect from "./Respect/Respect.jsx";
import Fiabilite from "./Fiabilite/Fiabilite.jsx";

function Propos() {
  return (
    <div>
      <Navbar />
      <div className="bannerPropos">
        <div className="overlay">
          <img
            src="./img/imgPropos.png"
            alt="bannière "
            className="imgPropos"
          />
        </div>
      </div>
      <div className="propos">
      <div className="proposListe">
        <Fiabilite />
        <Respect />
        <Service />
        <Securite />
      </div>
      </div>
      <Footer />
    </div>
  );
}
export default Propos;
