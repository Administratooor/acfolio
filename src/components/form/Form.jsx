import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import "../form/form.css";
import peopleIcon from "../../assets/assetsContact/people.png";
import emailIcon from "../../assets/assetsContact/send.png";
import sendIcon from "../../assets/assetsContact/name.png";

export default function Form() {
  const form = useRef();
  const [formClick, setFormClick] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setFormClick("clicked");
    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(
        () => {
          setFormClick("");
          alert("Cool, ce mail sera lu très prochainement ! Bonne visite...");
        },
        (error) => {
          setFormClick("");
          alert(
            "Désolé, nous rencontrons actuellement des problèmes. Vous pouvez me contacter à l'adresse suivante : clementanthony@hotmail.fr",
            error.text
          );
        }
      );
  };

  return (
    <div className="form">
        <form ref={form} onSubmit={sendEmail} className="form-container" id="form">
      <p className="send">SEND US A MESSAGE</p>
      <div className="form-content">
        <div className="form-group">
          <div className="form-select">
            <label htmlFor="choice">Choose an option:</label>
            <select name="user_choice" id="choice" className="choice">
              <option className="custom-option" value="Visiteur">Visiteur</option>
              <option className="custom-option" value="Recruteur">Recruteur</option>
              <option className="custom-option" value="Autre">Autre</option>
            </select>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="user_name">
            <img className="icon-form" src={peopleIcon} alt="People Icon" />
            Name:
          </label>
          <input type="text" name="user_name" id="user_name" placeholder="Enter your name" required />
        </div>
        <div className="form-group">
          <label htmlFor="user_email">
            <img className="icon-form" src={emailIcon} alt="Email Icon" />
            Email:
          </label>
          <input type="email" name="user_email" id="user_email" placeholder="Enter your email" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">
            <img className="icon-form" src={sendIcon} alt="Message Icon" />
            Message:
          </label>
          <textarea name="message" id="message" placeholder="Enter your message" required />
        </div>
        <input className={`submit-btn ${formClick}`} type="submit" value="Send" />
      </div>
    </form>
    </div>
  
  );
}
