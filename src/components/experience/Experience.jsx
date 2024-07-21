import { useRef } from "react";
import { useInView } from "framer-motion";
import "../experience/experience.css";
// import Xp from "../../assets/xpAc.gif";
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
    <section className="sectionExperience" id="sectionExperience" ref={ref}>
      <span
        className="section-span section-xp"
        style={{
          transform: isInView ? "none" : "translate(-200px, 200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
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
      <div>

        <Section className="experience">  
          <h2 className="experience-title">MY STORY</h2>
          <div className="e-left">
            <p className="experience-years">2017-2024</p>
            <p className="experienceTitle"> MANAGER TECHNICIEN INFORMATIQUE </p>
            <p className="experience-description">
              Technicien système et réseau/Developpement web JS
            </p>
            <div className="experience-img">
              <img className="img-xp" src={ag2r} alt="" srcset="" />
              <img className="img-xp" src={sicoval} alt="" srcset="" />
              <img className="img-xp" src={gasb} alt="" srcset="" />
            </div>
          </div>
          <div className="e-left-2">
            <p className="experience-years">2013-2016</p>
            <p className="experienceTitle"> RESPONSABLE DE POINT DE VENTE</p>
            <p className="experience-description">
              Manager/Gestionnaire/Formateur
            </p>
            <div className="experience-img">
              <img className="img-xp" src={fursac} alt="" srcset="" />
              <img className="img-xp" src={intimissimi} alt="" srcset="" />
              <img className="img-xp" src={devred} alt="" srcset="" />
            </div>
          </div>

          <div className="e-right">
            <p className="experience-years">2006-2011</p>
            <p className="experienceTitle"> MILITAIRE DU RANG</p>
            <p className="experience-description">
              Chef d'équipe/Soldat/Démineur du génie
            </p>
            <div className="experience-img">
              <img className="img-xp" src={rg} alt="" srcset="" />
            </div>
          </div>
        </Section>
      </div>
      <Recommendation />
    </>
  );
}
