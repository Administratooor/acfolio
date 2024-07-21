import "../footer/footer.css";
import ac from "../../assets/acTechnologie.png";

export default function Footer() {
  return (
    <footer>
      <div className="footer">
        {" "}
        <div className="footer-text">
          <h4>Copyright © 2024 AcTechnologie, Tous droits réservés.</h4>
        <div className="list">
          <ul>
            <li><a href="">GITHUB</a></li>
            <li><a href="">LINKEDIN</a></li>
          </ul>
        </div>
        </div>
        
        <img className="ac" src={ac} alt="" srcset="" />
      </div>
    </footer>
  );
}
