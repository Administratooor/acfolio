import React from "react";
import stars from "../../assets/recommendation/stars.png";
import "./recommendation.css";

function RecommendationCard({ author, role, company, text }) {
  return (
    <div className="recommendation-card">
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
      text: `J'ai accompagné Anthony en tant que <strong>mentor</strong> durant presque un an. Il s'est montré curieux, sérieux et rigoureux.`
    },
    {
      author: "Caroline B",
      role: "Responsable de région/ Commerce de détails",
      company: "INTIMISSIMI",
      text: `Monsieur Anthony C a occupé dans notre magasin <strong>INTIMISSIMI</strong> le poste de <strong>responsable de magasin</strong>.`
    },
    {
      author: "Antoine T",
      role: "Responsable de région/ Commerce de détails",
      company: "DE FURSAC",
      text: `Monsieur Anthony C a fait partie de nos effectifs pendant 2 ans.`
    },
  ];

  return (
    <section className="section-mention">
      <h2 className="experience-title">MENTION</h2>
      <div className="recommendation-img">
        {recommendations.map((rec, index) => (
          <RecommendationCard 
            key={index} 
            author={rec.author} 
            role={rec.role} 
            company={rec.company} 
            text={rec.text} 
          />
        ))}
      </div>
    </section>
  );
}
