import "../projet/projet.css";
import ImageScroller from '../imgProjet/ImgProjet';
import { motion } from 'framer-motion'; // Importer Framer Motion
import { useState, useEffect, useRef } from 'react'; // Importer useState, useEffect et useRef

export default function Projet() {
  const [count, setCount] = useState(0); // Utilisation du state pour le compteur
  const [isVisible, setIsVisible] = useState(false); // Etat pour savoir si l'élément est visible
  const counterRef = useRef(null); // Référence pour l'élément du compteur

  useEffect(() => {
    // Création de l'observateur pour détecter l'entrée dans la vue
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        // Quand l'élément entre dans la vue, on lance l'animation
        setIsVisible(true);
      }
    }, { threshold: 0.5 }); // Le seuil de visibilité de 50% de l'élément

    // Commencer à observer l'élément référencé
    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    // Nettoyage de l'observateur
    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, []);

  useEffect(() => {
    // Si l'élément devient visible, on lance l'animation du compteur
    if (isVisible) {
      const timer = setInterval(() => {
        setCount((prev) => {
          if (prev < 100) {
            return prev + 1;
          }
          clearInterval(timer); // Arrêter l'intervalle quand on atteint 100
          return prev;
        });
      }, 30); // Intervalle d'animation (20ms entre chaque mise à jour)

      return () => clearInterval(timer); // Nettoyage de l'intervalle si nécessaire
    }
  }, [isVisible]); // Déclencher l'animation quand l'élément devient visible

  return (
    <main className="project-main">
      <div className="project-main-realisation">
        <h3 id="realisations" className="project-title">
          MY WORK
        </h3>

        <div className="realisation-number">
          <p>Développement Web</p>
          {/* Affichage dynamique du compteur */}
          <motion.span
            ref={counterRef} // Attache la référence à l'élément
            key="counter"
          >
            {count - 92}+ Projets réalisés  {/* Afficher le compteur avec + */}
          </motion.span>
        </div>
        {/* Animation du texte avec framer-motion */}
        <motion.p
          initial={{ opacity: 0 }} // Commence avec l'opacité à 0
          animate={{ opacity: 1 }} // Devient opaque
          transition={{ duration: 1 }} // Transition pour l'opacité
        >
          <div className="realisation-number">
          <p>Support Informatique</p>
            <motion.span
              ref={counterRef} // Attache la référence à l'élément
              key="counter"
            >
              {count + 900}+ Tickets résolus {/* Afficher le compteur avec + */}
            </motion.span>
          </div>
        </motion.p>
      </div>

      <ImageScroller />
    </main>
  );
}
