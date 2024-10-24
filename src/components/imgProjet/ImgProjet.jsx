import React from "react";
import elementProjet from "../projet/elementProjet";
import "./imageProjet.css";

const ImageScroller = ({ images }) => {
  return (
    <div className="scroller-container">
      <div className="scroller-content">
        {images.map((img, i) => (
          <div key={i} className="project-card">
            <div className="project-card-top">
              <h2>{elementProjet[i].projetName}</h2>
              {/* <video autoPlay className="project-image" src={img} alt={`Projet ${elementProjet[i].projetName}`} /> */}
              <img src={img} className="project-image" alt="" srcset="" />
              <div className="project-details">
                <div className="projet-details-elements">
                  <div className="project-icons">
                    <img className="icon" src={elementProjet[i].icon} alt="" />
                    <img className="icon" src={elementProjet[i].icon1} alt="" />
                    <img className="icon" src={elementProjet[i].icon2} alt="" />
                  </div>
                  <p>{elementProjet[i].text1}</p>
                  <p>{elementProjet[i].text2}</p>
                  <p>{elementProjet[i].text3}</p>
                  <button className="github-button">
                    <a href={elementProjet[i].githubLink}>GitHub</a>
                  </button>

                </div>

              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageScroller;
