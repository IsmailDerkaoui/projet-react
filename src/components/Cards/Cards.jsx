import React from "react";
import "./cards.scss"
import Logement from "./Logement.jsx"
import { useEffect, useState } from "react";

import "./logement.scss";

function Cards() {
  const [logements, setLogements] = useState([]);

  useEffect(() => {
    fetch("./data/annonces-logement.json")
      .then((response) => response.json())
      .then((data) => {
        setLogements(data);
      });
  }, []);
    return <nav className="navCards">

      <div className="cards">
      <div className="logements-container">
      {logements.length === 0 ? (
        <p>Aucun logement trouvé.</p>
      ) : (
        logements.map((logement) => (
          <Logement logement={logement} />
        ))
      )}
    </div>
      </div>
    </nav>;
  }
  export default Cards;