import "../projet/projet.css";
import ImageScroller from '../imgProjet/ImgProjet';
import { motion } from 'framer-motion'; // Importer Framer Motion
import { useState, useEffect, useRef } from 'react'; // Importer useState, useEffect et useRef

export default function Projet() {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      const timer = setInterval(() => {
        setCount((prev) => {
          if (prev < 100) {
            return prev + 1;
          }
          clearInterval(timer);
          return prev;
        });
      }, 30);

      return () => clearInterval(timer);
    }
  }, [isVisible]);

  return (
    <main className="project-main">
      <div className="project-main-realisation">
        <h3 id="realisations" className="project-title">
          MY WORK
        </h3>

        <div className="realisation-container">
          <div className="realisation-number">
            <p>Développement Web</p>
            <motion.span ref={counterRef} key="counter">
              {count - 92}+ Projets réalisés
            </motion.span>
          </div>

          <div className="realisation-number">
            <p>Support Informatique</p>
            <motion.span key="counter">
              {count + 900}+ Tickets résolus
            </motion.span>
          </div>
        </div>
      </div>

      <ImageScroller />
    </main>
  );
}
