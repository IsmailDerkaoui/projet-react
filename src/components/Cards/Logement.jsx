import React from "react";
import { Link } from "react-router-dom";
import "./logement.scss";

const Logement = (props) => {
const logement = props.logement

  return (
    <Link to={"/apartments/"+ logement.id} className="logement-link">
    <div key={logement.id} className="logement-card">
    <div className="logement-image-container">
      <img src={logement.cover} alt={logement.title} className="logement-image" />
      <div className="logement-overlay"></div>
      </div>
      <h3 className="logement-title">{logement.title}</h3>
    </div>
</Link>
  );
};

export default Logement;
