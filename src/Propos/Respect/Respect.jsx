import { useState } from "react";
import "./respect.scss";

const Respect = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className="respect" onClick={() => setIsOpen(!isOpen)}>
        <p className="respectText">Respect</p>
        <i
          className={`fa-solid ${isOpen ? "fa-chevron-down" : "fa-chevron-up"}`}
        ></i>
      </div>

      {isOpen && (
        <p className="respectContent">
          La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
          comportement discriminatoire ou de perturbation du voisinage
          entraînera une exclusion de notre plateforme.
        </p>
      )}
    </div>
  );
};

export default Respect;
