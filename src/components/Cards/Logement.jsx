import React from "react";
import { Link } from "react-router-dom";
import "./logement.scss";

const Logement = (props) => {
const logement = props.logement

  return (
    <Link to={"/apartments/"+ logement.id} className="logement-link">
    <div key={logement.id} className="logement-card">
      <img src={logement.cover} alt={logement.title} className="logement-image" />
      <h3 className="logement-title">{logement.title}</h3>
    </div>
</Link>
  );
};

export default Logement;
