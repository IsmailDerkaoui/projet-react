import React from "react";
//import "./App.css"
import Navbar from "../components/nav/Navbar.jsx";
import Footer from "../components/Footer/Footer.jsx";
import "./Error.scss";
import { Link } from "react-router-dom";
//import ErrorImg from "./components/Error/ErrorImg.jsx"

function Error404() {
  return (
    <div>
      <Navbar />
      <div className="Error">
        <img src="./404.png" alt="Erreur 404" className="imgError" />
        <p className="textError">
          Oups ! La page que vous demandez n'existe pas.
        </p>
        <Link to="/">
          <p className="retourAccueil">Retourner sur la page d'accueil</p>
        </Link>
      </div>
      <Footer />
    </div>
  );
}
export default Error404;
