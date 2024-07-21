import React from "react";
import "../navbar/navbar.css";
import ac from "../../assets/acTechnologie.png";

export default function Navbar() {
  return (
    <nav className="nav-links">
      <div className="navbar-link">
        <div>
        <img src={ac} alt="" srcset="" />

        </div>

        <a href="#main">Home</a>
        <a href="#realisations">Work</a>
        <a href="#sectionExperience">Story</a>
        <a href="#form">Contact</a>
      </div>
    </nav>
  );
}
