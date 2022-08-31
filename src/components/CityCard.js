import React from "react";
import "../style/CityCards.css";
import {Link as LinkRouter} from 'react-router-dom'

function CityCard() {
  let dataCities = [
    {
      photo: "./images/bariloche.jpg",
      city: "Bariloche",
      id: 1,
      country: "",
      population: 0,
      fundation: 0
    },
    {
      photo: "./images/paris1.jpg",
      city: "Paris",
      id: 2,
      country: "",
      population: 0,
      fundation: 0
    },
    {
      photo: "./images/valencia.jpg",
      city: "Valencia",
      id: 3,
      country: "",
      population: 0,
      fundation: 0
    },
    {
      photo: "./images/Cancun.jpg",
      city: "Cancun",
      id: 4,
      country: "",
      population: 0,
      fundation: 0
    },
    {
      photo: "./images/egypto.jpg",
      city: "Egypto",
      id: 5,
      country: "",
      population: 0,
      fundation: 0
    },
    {
      photo: "./images/tokio.jpg",
      city: "Tokio",
      id: 6,
      country: "",
      population: 0,
      fundation: 0
    },
    {
      photo: "./images/abu_dabi.jpg",
      city: "Abu Dabi",
      id: 7,
      country: "",
      population: 0,
      fundation: 0
    },
    {
      photo: "./images/camboya.jpg",
      city: "Camboya",
      id: 8,
      country: "",
      population: 0,
      fundation: 0
    },
    {
      photo: "./images/rio_de_janeiro.jpeg",
      city: "Río de Janeiro",
      id: 9,
      country: "",
      population: 0,
      fundation: 0
    },
    {
      photo: "./images/dublin.jpg",
      city: "Dublín",
      id: 10,
      country: "",
      population: 0,
      fundation: 0
    },
    {
      photo: "./images/sidney.jpg",
      city: "Sidney",
      id: 11,
      country: "",
      population: 0,
      fundation: 0
    },
    {
      photo: "./images/mallorca.jpg",
      city: "Mallorca",
      id: 12,
      country: "",
      population: 0,
      fundation: 0
    },
  ];

  const cardCity = (city) => {
    return (
      <div className="cards" key={city.city}>
        <div className="cards_item">
          <div className="card">
            <div className="card_image">
              <img src={city.photo} alt={city.city} />
            </div>
            <div className="card_content">
              <h2 className="card_title">{city.city}</h2>
              <p className="card_text">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
              <LinkRouter to="*" className="btn card_btn">Read More</LinkRouter>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
        <div className="cityCard-container">
            {dataCities.map(cardCity)}
        </div>
    </>
  )
}

export default CityCard;
