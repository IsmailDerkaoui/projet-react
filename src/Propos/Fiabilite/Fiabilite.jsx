import { useState } from "react";
import "./fiabilite.css";

const Fiabilite = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className="fiabilite" onClick={() => setIsOpen(!isOpen)}>
        <p className="fiabiliteText">Fiabilité</p>
        <i
          className={`fa-solid ${isOpen ? "fa-chevron-down" : "fa-chevron-up"}`}
        ></i>
      </div>

      {isOpen && (
        <p className="fiabiliteContent">
          Les annonces postées sur Kasa garantissent une fiabilité totale. Les
          photos sont conformes aux logements, et toutes les informations sont
          régulièrement vérifiées par nos équipes.
        </p>
      )}
    </div>
  );
};

export default Fiabilite;
