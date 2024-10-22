import { useRef, useState, useEffect } from "react";
import stars from "../../assets/recommendation/stars.png";
import "./recommendation.css";

function Section({ children }) {
  const ref = useRef(null);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [scrollDirection, setScrollDirection] = useState("down");

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > lastScrollTop) {
        setScrollDirection("down");
      } else {
        setScrollDirection("up");
      }
      setLastScrollTop(scrollTop <= 0 ? 0 : scrollTop);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop]);

  return (
    <section className="section-mention" ref={ref}>
      <div className={`section-content ${scrollDirection === "down" ? 'open' : 'close'}`}>
        {children}
      </div>
    </section>
  );
}

function RecommendationCard({ author, role, company, text, animationClass }) {
  return (
    <div className={`recommendation-card ${animationClass}`}>
      <div className="recommendation-card-header"></div>
      <div className="header-recommendation recommendation-block">
        <p className="recommendation-author">{author}</p>
        <h3 className="recommendation-role">{role} chez {company}</h3>
        <p className="recommendation-p" dangerouslySetInnerHTML={{ __html: text }} />
        <img className="stars" src={stars} alt="Stars" />
      </div>
    </div>
  );
}

export default function Recommendation() {
  const recommendations = [
    {
      author: "Gilles F",
      role: "Ingénieur de développement NTIC",
      company: "Atos",
      text: `J'ai accompagné Anthony en tant que <strong>mentor</strong> durant presque un an.
              Il s'est montré curieux, sérieux et rigoureux. Il n'a jamais
              reculé devant les difficultés rencontrées et n'est pas du genre
              à abandonner. Il a toutes les qualités pour devenir un bon
              développeur. Je l'accueillerais sans aucune réserve dans mon
              équipe projet si l'occasion se présentait.`
    },
    {
      author: "Caroline B",
      role: "Responsable de région/ Commerce de détails",
      company: "INTIMISSIMI",
      text: `Monsieur Anthony C a occupé dans notre magasin <strong>INTIMISSIMI</strong>
              de Toulouse <strong>(CALZEDONIA GROUPE)</strong> le poste de <strong>responsable de
              magasin</strong> depuis le mois d'avril 2016 jusqu'au 31 août 2016. Il a
              fait preuve dès le début d'un réel <strong>professionnalisme</strong>, toujours
              disponible pour le magasin, les clients, mais aussi son équipe de
              vente. Très à l'aise sur la gestion des stocks et les analyses
              commerciales, Anthony a fait preuve de beaucoup de rigueur dans
              son travail au quotidien. De nature sociale et formateur, il a su
              former son équipe dans le respect des règles et de la hiérarchie.`
    },
    {
      author: "Antoine T",
      role: "Responsable de région/ Commerce de détails",
      company: "DE FURSAC",
      text: `Monsieur Anthony C a fait partie de nos effectifs pendant 2 ans. Ce
              dernier n'a cessé de nous donner satisfaction dans l'exercice de ses
              fonctions de responsable. En effet, notre maison propose à la clientèle
              un <strong>haut de gamme</strong> nécessitant le conseil d'un personnel hautement
              qualifié. Monsieur Anthony C dispose de réelles compétences pour une
              mise en exergue optimisée du produit. Sa connaissance du textile, son
              respect du client, son sens aigu de l'observation et de <strong>l'écoute des
              besoins</strong> lui ont permis de fidéliser une clientèle et d'accroître
              régulièrement le CA du point de vente qu'il gérait en toute autonomie.
              C'est donc sans hésitation que nous pouvons recommander sa
              candidature à des postes équivalents ou de responsabilité supérieure
              impliquant un encadrement d'équipe.`
    },
  ];

  const animationClasses = ['scroll-left', 'scroll-right', 'scroll-left'];

  return (
    <Section>
      <div className="recommendation-img">
        <h2 className="experience-title">MENTION</h2>
        {recommendations.map((rec, index) => (
          <RecommendationCard
            key={index}
            author={rec.author}
            role={rec.role}
            company={rec.company}
            text={rec.text}
            animationClass={animationClasses[index]}
          />
        ))}
      </div>
    </Section>
  );
}
