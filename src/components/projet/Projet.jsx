
import "../projet/projet.css";
import ImageScroller from '../imgProjet/ImgProjet';
import OhMyFood from "../../assets/gif/Ohmyfood.webm";
// import booki from "../../assets/gif/booki.webm";
import kanap from "../../assets/gif/kanap.webm";
import kasa from "../../assets/gif/kasa.webm";
import panthere from "../../assets/gif/panthere.webm";
import piquante from "../../assets/gif/piquante.webm";

export default function Projet() {
  const images = [
    booki,
    OhMyFood,
    panthere,
    kanap,
    piquante,
    kasa
  ];

  return (
    <main className="project-main">
      <h1 id="realisations" className="project-title">
        MY WORKS
      </h1>
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

      <ImageScroller images={images} />
    </main>
  );
}