import React from "react";
import "./main.scss"

function Main({children}) {
    return <div className="mainFull">
    <div className="main">{children}</div>
    </div>
  }
  export default Main;