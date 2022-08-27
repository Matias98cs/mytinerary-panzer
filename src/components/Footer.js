import React from "react";
import "../style/Footer.css";
import { Link as LinkRouter } from "react-router-dom";

export default function Footer() {
  const dateNow = new Date();
  let year = dateNow.getFullYear();

  const scrollToUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
      <footer>
        <div className="Footer-container">
          <div className="Footer-socials">
            <a href="https://es-la.facebook.com/">
              <img src="images/icons8-facebook-f-24.png" alt="" />
            </a>
            <a href="https://www.instagram.com/">
              <img src="images/icons8-instagram-24.png" alt="" />
            </a>
            <a href="https://www.whatsapp.com/?lang=es">
              <img src="images/icons8-whatsapp-24.png" alt="" />
            </a>
            <a href="https://www.youtube.com/">
              <img src="images/icons8-youtube-play-24.png" alt="" />
            </a>
          </div>
          <div className="Footer-logo">
            <img src="./images/My-Tinerary-logo.png" alt="" />
            <div>
              <LinkRouter className="btn-footer" to="/">
                Home
              </LinkRouter>
              <LinkRouter className="btn-footer" to="/cities">
                Cities
              </LinkRouter>
              <LinkRouter className="btn-footer" to="/newcity" >New City</LinkRouter>
            </div>
          </div>
          <div className="Footer-address">
            <p>
              Address: <strong>Río de Janeiro 300, Caballito</strong>
            </p>
            <p>
              Email:{" "}
              <a href="mailto:dsadsad@gmail.com">
                <strong>mytinerary@gmail.com</strong>
              </a>
            </p>
          </div>
          <button className="Footer-btn-top" onClick={scrollToUp}>
            <img src="./images/arrow-up-circle.svg" alt="" />
          </button>
        </div>
        <div className="Footer-year">
            <p>My Tinerary © {year}</p>
        </div>
      </footer>
  );
}
