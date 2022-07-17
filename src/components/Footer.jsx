import React from "react";
import "./Footer.css";
function Footer() {
  const year = new Date().getFullYear();
  return <footer>Team VCare © {year}</footer>;
}

export default Footer;
