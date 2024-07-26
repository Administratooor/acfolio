import { useRef, useState, useEffect } from "react";
import { useInView } from "framer-motion";
import "../Main/main.css";
import profil from "../../assets/profilHome.png";
import arrow from "../../assets/arrow.png";
import github from "../../assets/assetsContact/github.png"

function Section({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="animated-section" ref={ref}>
      <span
        style={{
          transform: isInView ? "none" : "translate(200px, -400px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.4s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        {children}
      </span>
    </section>
  );
}

export default function Main() {
  const [displayedText, setDisplayedText] = useState("");
  const fullText = " dDéveloppeur Web ";

  useEffect(() => {
    let currentIndex = 0;
    const intervalId = setInterval(() => {
      if (currentIndex < fullText.length) {
        setDisplayedText((prev) => {
          const nextChar = fullText[currentIndex];
          if (nextChar !== undefined) {
            return prev + nextChar;
          }
          return prev;
        });
        currentIndex++;
      } else {
        clearInterval(intervalId);
      }
    }, 100);

    return () => {
      clearInterval(intervalId);
    };
  }, [fullText]);

  return (
    <div className="home-container">
      <div className="content-wrapper" id="main">
        <div className="left-panel">
          <Section>
            <img src={profil} className="profile-image" alt="Profil de Anthony C" />
          </Section>
        </div>
        <div className="right-panel">
          <div className="right-content">
            <p>ANTHONY C</p>
            <h1>{displayedText}</h1>
            <div className="button-group">
              <a className="social-button" href="https://github.com/Administratooor">Github<img src={github} className="icon" alt="github Link" />
              
                
              </a>
              <a className="social-button linkedin-button" href="linkedin.com/in/ac-tech

">
                Linkedin
              </a>
            </div>
          </div>
        </div>     
         <a className="arrow-link" href="#realisations">
        <img className="arrow-icon" src={arrow} alt="Poursuivre vers la section projet" />
      </a>
      </div>

    </div>
  );
}
