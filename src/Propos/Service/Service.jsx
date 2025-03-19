import { useState } from "react";
import "./service.scss";

const Service = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className="service" onClick={() => setIsOpen(!isOpen)}>
        <p className="serviceText">Service</p>
        <i
          className={`fa-solid ${isOpen ? "fa-chevron-down" : "fa-chevron-up"}`}
        ></i>
      </div>

      {isOpen && (
        <p className="serviceContent">
          La qualité du service est au cœur de notre engagement chez Kasa. Nous
          veillons à ce que chaque interaction, que ce soit avec nos hôtes ou
          nos locataires, soit empreinte de respect et de bienveillance.
        </p>
      )}
    </div>
  );
};

export default Service;
