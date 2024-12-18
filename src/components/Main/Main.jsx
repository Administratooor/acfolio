import "../Main/main.css";
import arrow from "../../assets/arrow.png";
import profil from "../../assets/fontHome.png";
import { useInView, motion } from "framer-motion";
import { useRef } from "react";

export default function Main() {
  function Section({ children }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
      <section ref={ref}>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{
            opacity: isInView ? 1 : 0,
            scale: isInView ? 1 : 0.5,
          }}
          transition={{
            duration: 0.3,
            ease: [0, 0.71, 0.2, 1.01],
            scale: {
              type: "spring",
              damping: 4,
              stiffness: 100,
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
    <div className="main">
      <img className="profil" src={profil} alt="Profil" />
      <div className="section-main"> <Section>

        <p className="name">Anthony C.</p>
        <h1>
          Development
        </h1>
        <span> & Web Design </span>

      </Section> <h2 className="sub-text">
          Support et développeur de site web passioné
        </h2>

        <a className="service" href="#next-section">
          <img className="arrow" src={arrow} alt="Scroll Arrow" />
          <span>MES SERVICES</span>
        </a>
      </div>

    </div>
  );
}
