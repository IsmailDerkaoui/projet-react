import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../components/nav/Navbar.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import Description from "../description/Description.jsx";
import Equipement from "../equipement/Equipement.jsx";
import Carousel from "../Carousel/carousel.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "./logementDetail.scss";

function LogementDetail() {
  const { id } = useParams();
  const [logement, setLogement] = useState(null);

  useEffect(() => {
    fetch("/data/annonces-logement.json")
      .then((response) => response.json())
      .then((data) => {
        const logementTrouve = data.find((logement) => logement.id === id);
        setLogement(logementTrouve);
      })
      .catch((error) =>
        console.error("Erreur lors du chargement des données:", error)
      );
  }, [id]);

  if (!logement) {
    return <p>Chargement...</p>;
  }

  return (
    <div>
      <Navbar />
      <div className="logementDetail">
        <div className="carousel">
          <div className="imgCarousel">
            <Carousel images={logement.pictures} />
          </div>
        </div>
        <div className="logementSousTitre">
          <div className="logement">
            <h1 className="titreLogement">{logement.title}</h1>
            <p className="locationLogement">{logement.location}</p>
          </div>
          <div className="host">
            <div className="hostInfo">
              <p className="hostName">{logement.host.name}</p>
              <img
                src={logement.host.picture}
                alt="propriétaire"
                className="hostPicture"
              />
            </div>
            <div className="hostRating">
              {[...Array(5)].map((_, i) => (
                <FontAwesomeIcon
                  key={i}
                  icon={faStar}
                  className={i < logement.rating ? "star-filled" : "star"}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="cozyCanal">
          <p className="cozy">Cozy</p>
          <p className="canal">Canal</p>
          <p className="locationCanal">Paris 10</p>
        </div>
        <div className="descriptionEquipement">
          <Description  logement={logement} />
          <Equipement  logement={logement} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default LogementDetail;
