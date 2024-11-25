import React, { useState, useEffect } from "react";
import "../navbar/navbar.css";
import ac from "../../assets/acTechnologie.png";

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      // Détecter si on scrolle vers le bas ou vers le haut
      if (currentScrollPos > prevScrollPos && currentScrollPos > 50) {
        setIsVisible(false); // Cacher la navbar en scrollant vers le bas
      } else {
        setIsVisible(true); // Afficher la navbar en scrollant vers le haut
      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  return (
    <nav className={`nav-links ${isVisible ? "visible" : "hidden"}`}>
      <div className="navbar-link">
        <img src={ac} alt="AC Logo" />
        <a href="#main">Home</a>
        <a href="#realisations">Work</a>
        <a href="#sectionExperience">Story</a>
        <a href="#form">Contact</a>
      </div>
    </nav>
  );
}
