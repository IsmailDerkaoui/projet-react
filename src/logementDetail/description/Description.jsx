import React, { useState } from "react";
import "./description.scss";

const Description = ({ logement }) => {
  const [isOpen, setIsOpen] = useState(false);

  console.log("logement:", logement);

  return (
    <div className="collapse-box">
      <div className="description" onClick={() => setIsOpen(!isOpen)}>
        <p className="descriptionText">Description</p>
        <i
          className={`fa-solid ${isOpen ? "fa-chevron-down" : "fa-chevron-up"}`}
        ></i>
      </div>

      {isOpen && <p className="descriptionContent">{logement?.description || "Aucune description disponible"}</p>}
    </div>
  );
};

export default Description;
