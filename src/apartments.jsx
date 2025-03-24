import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "./components/nav/Navbar.jsx";
import Footer from "./components/Footer/Footer.jsx";

function Apartment() {
  const [logements, setLogements] = useState([]);

  useEffect(() => {
    fetch("/data/annonces-logement.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erreur lors du chargement des données");
        }
        return response.json();
      })
      .then((data) => setLogements(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <Navbar />
      <div className="apartment-page">
        <main className="apartment-container">
          <div className="apartment-grid">
            {logements.map((logement) => (
              <Link
                to={`/logement/${logement.id}`}
                key={logement.id}
                className="apartment-card"
              >
                <div className="apartment-card-img-container">
                  <img
                    src={logement.cover}
                    alt={logement.title}
                    className="apartment-card-img"
                  />
                  <div className="apartment-card-overlay"></div>
                </div>
                <h2 className="apartment-card-title">{logement.title}</h2>
                <p className="apartment-card-location">{logement.location}</p>
              </Link>
            ))}
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default Apartment;
