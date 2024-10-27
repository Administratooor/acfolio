import { useRef } from "react";
import { useInView } from "framer-motion";
import "../experience/experience.css";
import Recommendation from "../recommendation/Recommendation";
import ag2r from "../../assets/experience/ag2r.png";
import sicoval from "../../assets/experience/sicoval.jpg";
import gasb from "../../assets/experience/gasb.png";
import fursac from "../../assets/experience/fursac.jpg";
import devred from "../../assets/experience/devred.jpg";
import intimissimi from "../../assets/experience/intimissimi.png";
import rg from "../../assets/experience/3rg.png";

function Section({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="sectionExperience" ref={ref}>
      <span
        className="section-span"
        style={{
          transform: isInView ? "none" : "translateY(20px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.5s ease-in-out",
        }}
      >
        {children}
      </span>
    </section>
  );
}

export default function Experience() {
  return (
    <>
      <Section>
        <h2 className="experience-title">MY STORY</h2>
        <div className="experience-container">
          <ExperienceCard 
            years="2017-2024" 
            title="MANAGER TECHNICIEN INFORMATIQUE" 
            description="Technicien système et réseau/Developpement web JS" 
            images={[ag2r, sicoval, gasb]} 
          />
          <ExperienceCard 
            years="2013-2016" 
            title="RESPONSABLE DE POINT DE VENTE" 
            description="Manager/Gestionnaire/Formateur" 
            images={[fursac, intimissimi, devred]} 
          />
          <ExperienceCard 
            years="2006-2011" 
            title="MILITAIRE DU RANG" 
            description="Chef d'équipe/Soldat/Démineur du génie" 
            images={[rg]} 
          />
        </div>
      </Section>
      <Recommendation />
    </>
  );
}

function ExperienceCard({ years, title, description, images }) {
  return (
    <div className="experience-card">
      <p className="experience-years">{years}</p>
      <p className="experienceTitle">{title}</p>
      <p className="experience-description">{description}</p>
      <div className="experience-img">
        {images.map((src, index) => (
          <img key={index} className="img-xp" src={src} alt="" />
        ))}
      </div>
    </div>
  );
}
