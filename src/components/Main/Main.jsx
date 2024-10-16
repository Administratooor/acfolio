
import "../Main/main.css";
import arrow from "../../assets/arrow.png"
import profil from "../../assets/fontHome.png"

export default function Main() {


  return (
    <div className="main">
      <img className="profil" src={profil} alt="" />
      <p>Anthony C.</p>
      <h1>Developement <br /> <p>& Web Design </p> </h1>
      <h2>Support and creation of websites optimized for SEO </h2>
    <a href=""><img className="arrow" src={arrow}alt="" srcset="" /></a>  
    </div>
  );
}
