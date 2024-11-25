import "../experience/experience.css";
import { useInView, motion } from "framer-motion";
import { useRef } from "react";

export default function Main() {
  function Section({ children }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
      <section ref={ref}>
        <motion.div className="xp"
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
        <h3 id="realisations" className="project-title">XP</h3>
      </Section>
      <div className="cards-wrapper">
        <div className="project-card">
          <div className="card-header">
            <span className="card-number">01</span>
          </div>
          <div className="card-content">
            <p className="card-title">Test project</p>
            <p className="card-description">A detailed description of the military project goes here.</p>
            <a href="https://www.example.com" className="card-link">Visit site</a>
          </div>
        </div>

        <div className="project-card">
          <div className="card-header">
            <span className="card-number">02</span>
          </div>
          <div className="card-content">
            <p className="card-title">Design</p>
            <p className="card-description">A detailed description of the design project goes here.</p>
            <a href="https://www.example.com" className="card-link">Visit site</a>
          </div>
        </div>

        <div className="project-card">
          <div className="card-header">
            <span className="card-number">03</span>
          </div>
          <div className="card-content">
            <p className="card-title">SEO</p>
            <p className="card-description">A detailed description of the SEO project goes here.</p>
            <a href="https://www.example.com" className="card-link">Visit site</a>
          </div>
        </div>
      </div>
    </div>
  );
}
