import { useRef } from "react";
import { useInView, motion } from "framer-motion";

import "../projet/projet.css";
import ImageScroller from '../imgProjet/ImgProjet';
import OhMyFood from "../../assets/gif/Ohmyfood.webm";
// import booki from "../../assets/gif/booki.webm";
import kanap from "../../assets/gif/kanap.png";
import kasa from "../../assets/gif/kasa.svg";
import panthere from "../../assets/gif/laPanthere.png";
import piquante from "../../assets/gif/piiquante.png";

export default function Projet() {
  const images = [
    // booki,
    OhMyFood,
    panthere,
    kanap,
    piquante,
    kasa
  ];

  function Section({ children }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
  
    return (
      <section ref={ref}>
        <motion.div
  initial={{ opacity: 0, rotateY: 180 }}
  animate={{ opacity: isInView ? 1 : 0, rotateY: isInView ? 0 : 180 }}
  transition={{
    duration: 1.5,
    ease: "easeInOut",
            
          }}
        >
          {children}
        </motion.div>
      </section>
    );
  }

  return (
    <main className="project-main">
      <h3 id="realisations" className="project-title">
        MY WORKS
      </h3>
      <p className="project-description">
        Un court résumé des différents projets que j'ai pu réaliser. En tant que
        <span className="highlight-text"> développeur Fullstack</span>, j'ai réalisé une variété de projets qui
        démontrent mes compétences en <span className="highlight-text">JavaScript</span>, tant pour le <span className="highlight-text">frontend</span> que pour
        le <span className="highlight-text">backend</span>. J'ai conçu et développé des <span>interfaces web dynamiques et des
        applications web progressives (PWA)</span> qui offrent une expérience
        utilisateur <span className="highlight-text">fluide et interactive</span>. En parallèle, j'ai mis en place des
        backends <span className="highlight-text">robustes et performants</span>, garantissant la <span className="highlight-text">fiabilité et
        l'efficacité des systèmes</span>. Mon expertise en JavaScript me permet de
        créer des solutions complètes, de la conception d'interfaces utilisateur
        attrayantes à la gestion de la logique serveur.
      </p>
      <Section>
        <ImageScroller images={images} />
      </Section>
    </main>
  );
}
