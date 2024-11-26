import "../experience/experience.css";
import { useInView, motion } from "framer-motion";
import { useRef } from "react";

export default function Main() {
  function Section({ children }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
      <section ref={ref}>
        <motion.div
          className="xp"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 0.7 : 0 }}
          transition={{
            duration: 0.1,
            ease: [0, 0.71, 0.2, 1.01],
            scale: {
              type: "spring",
              damping: 1,
              stiffness: 300,
              restDelta: 0.001,
            },
          }}
        >
          {children}
        </motion.div>
      </section>
    );
  }

  return (
    <div className="container">
      <Section>
        <h3 id="realisations" className="project-title">
          XP
        </h3>
      </Section>
      <div className="cards-wrapper">
        {" "}
        <div className="project-card">
          <div className="card-header">
            <span className="card-number">01</span>
          </div>
          <div className="card-content">
            <p className="card-title">WEB</p>
            <p className="card-description">
              <b>Développeur web passionné </b> , j’ai travaillé avec des
              technologies variées comme <b>React, Node.js </b> et des outils
              d’animation tels que Framer Motion. Mon expérience inclut le
              développement de sites web <b>responsives </b> , d’interfaces
              utilisateur intuitives et la mise en œuvre de solutions{" "}
              <b>backend robustes </b> . Toujours à l'écoute des{" "}
              <b>besoins des clients</b>.
            </p>
          </div>
        </div>
        <div className="project-card">
          <div className="card-header">
            <span className="card-number">02</span>
          </div>
          <div className="card-content">
            <p className="card-title">SUPPORT</p>
            <p className="card-description">
              <b>Technicien support informatique </b> expérimenté ayant
              travaillé sur divers types <b>d' infrastructures </b> , allant des
              serveurs physiques et virtuels aux environnements Active
              Directory, DNS, et Exchange. J'ai développé une{" "}
              <b>solide expertise</b> en résolution de problèmes et en
              accompagnement utilisateur{" "}
            </p>
          </div>
        </div>
        <div className="project-card">
          <div className="card-header">
            <span className="card-number">03</span>
          </div>
          <div className="card-content">
            <p className="card-title">Gestion</p>
            <p className="card-description">
              A l'aise en <b>administration de sites web et en gestion
              d’hébergement. </b>  J’ai une expérience solide dans l’installation, la
              configuration et la maintenance de plateformes web, ainsi que dans
              la gestion des serveurs d’hébergement mutualisé, dédié ou sur le
              cloud. Je maîtrise les tâches liées à la <b> gestion des noms de
              domaine, la configuration DNS, la sécurisation des sites avec des
              certificats SSL, </b> pour assurer un fonctionnement fiable et sécurisé
              des sites web.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
