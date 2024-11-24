import React, { useState } from "react";
import elementProjet from "../projet/elementProjet"; // Assurez-vous que 'elementProjet' est bien structuré
import "./imageProjet.css";
import { motion } from "framer-motion"; // Importer framer-motion pour l'animation

const ImageScroller = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Fonction pour gérer le survol de l'élément
  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  // Fonction pour gérer la sortie du survol
  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <div className="scroller-content">
      {elementProjet.map((projet, i) => (
        <div
          key={i}
          className="project-card"
          onMouseEnter={() => handleMouseEnter(i)}
          onMouseLeave={handleMouseLeave}
        >
          <div className="project-card-top">

            
            {/* On ne rend plus l'image, mais l'animation et le texte sont conservés */}
            <div className="projet-details-elements">
              <div className="project-icons">
                {/* <img className="icon" src={projet.icon} alt="icon" />
                <img className="icon" src={projet.icon1} alt="icon1" />
                <img className="icon" src={projet.icon2} alt="icon2" /> */}
                            <h2>{projet.projetName}</h2>
              </div>
              <div className="project-text">
                <p>{projet.text1}</p>
                <p>{projet.text2}</p>
                <p>{projet.text3}</p>
              </div>
          
            </div>

            {/* Animation du texte avec framer-motion */}
            <motion.div
              className="project-details"
              initial={{ opacity: 0, y: 5 }}
              animate={{
                opacity: hoveredIndex === i ? 1 : 0,
                y: hoveredIndex === i ? 0 : 60, // Remonte le texte lors du survol
              }}
              transition={{
                duration: 0.3,
                ease: "easeOut",
              }}
            > 
          <button className="github-button">
                <a href={projet.githubLink}>it's over here </a>
              </button>
              {/* Le contenu du texte est déjà affiché ci-dessus, mais on utilise ici pour l'animation */}
            </motion.div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImageScroller;
