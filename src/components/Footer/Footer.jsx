import React from "react";
import "./footer.scss"

function Footer() {
    return <div className="footer">
    <img src={process.env.PUBLIC_URL + '/img/logo-footer.png'} alt="logoFooter" className="imgFooter" />
    <p className="textFooter">&#169; 2020 Kasa. All rights reserved</p>
    </div>
  }
  export default Footer;