import React, { useState } from "react";
import "./equipement.scss";

const Equipement = ({ logement }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className="equipement" onClick={() => setIsOpen(!isOpen)}>
        <p className="equipementText">Equipements</p>
        <i
          className={`fa-solid ${isOpen ? "fa-chevron-down" : "fa-chevron-up"}`}
        ></i>
      </div>

      {isOpen && (
        <div className="equipementContent">
          {logement?.equipments?.length > 0 ? (
            <ul className="equipementList">
              {logement.equipments.map((equipement, index) => (
                <li key={index} className="equipementItem">
                  {equipement}
                </li>
              ))}
            </ul>
          ) : (
            <p>Aucun équipement disponible</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Equipement;
