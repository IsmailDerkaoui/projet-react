import { useState } from "react";
import "./securite.scss";

const Securite = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className="securite" onClick={() => setIsOpen(!isOpen)}>
        <p className="securiteText">Sécurité</p>
        <i
          className={`fa-solid ${isOpen ? "fa-chevron-down" : "fa-chevron-up"}`}
        ></i>
      </div>

      {isOpen && (
        <p className="securiteContent">
          Les annonces postées sur Kasa garantissent une fiabilité totale. Les
          photos sont conformes aux logements, et toutes les informations sont
          régulièrement vérifiées par nos équipes.
        </p>
      )}
    </div>
  );
};

export default Securite;
