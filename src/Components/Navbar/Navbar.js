import React from "react";
import "./Navbar.css";
export default function Navbar() {
  return (
    <div className="navbar container">
      <img className="navbar__logo" src="./img/logo.svg" alt="logo" />

      <ul className="navbar__menu">
        <li className="navbar__menu_item">Home</li>
        <li className="navbar__menu_item">Features</li>
        <li className="navbar__menu_item">Product</li>
        <li className="navbar__menu_item">Clients</li>
      </ul>
    </div>
  );
}
