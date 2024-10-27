
import "../Main/main.css";
import arrow from "../../assets/arrow.png"
import profil from "../../assets/fontHome.png"
import {  useInView, motion } from "framer-motion";
import {useRef } from "react"



export default function Main() {
  
  function Section({ children }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });


  return (
    <section ref={ref}>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0.5 }} // Animation basée sur le view
        transition={{
          duration: 0.3,
          ease: [0, 0.71, 0.2, 1.01],
          scale: {
            type: "spring",
            damping: 4,
            stiffness: 100,
            restDelta: 0.001
          }
        }}
      >
        {children}
      </motion.div>
    </section>
  );
}

  return (
  
    <div className="main">
      <img className="profil" src={profil} alt="" />
       <Section><p>Anthony C.</p>
       <h1>Developement <br /> <p>& Web Design </p> </h1></Section>
      <h2>Support and creation of websites optimized for SEO </h2>
    <a href=""><img className="arrow" src={arrow}alt="" srcset="" /></a>  
    </div>
  );
}
