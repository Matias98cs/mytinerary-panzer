import React from "react";
import "../style/CityCards.css";
import {Link as LinkRouter} from 'react-router-dom'

function CityCard() {
  let dataCities = [
    {
      url: "./images/bariloche.jpg",
      title: "Bariloche",
      id: 1,
    },
    {
      url: "./images/paris1.jpg",
      title: "Paris",
      id: 2,
    },
    {
      url: "./images/valencia.jpg",
      title: "Valencia",
      id: 3,
    },
    {
      url: "./images/Cancun.jpg",
      title: "Cancun",
      id: 4,
    },
    {
      url: "./images/egypto.jpg",
      title: "Egypto",
      id: 5,
    },
    {
      url: "./images/tokio.jpg",
      title: "Tokio",
      id: 6,
    },
    {
      url: "./images/abu_dabi.jpg",
      title: "Abu Dabi",
      id: 7,
    },
    {
      url: "./images/camboya.jpg",
      title: "Camboya",
      id: 8,
    },
    {
      url: "./images/rio_de_janeiro.jpeg",
      title: "Río de Janeiro",
      id: 9,
    },
    {
      url: "./images/dublin.jpg",
      title: "Dublín",
      id: 10,
    },
    {
      url: "./images/sidney.jpg",
      title: "Sidney",
      id: 11,
    },
    {
      url: "./images/mallorca.jpg",
      title: "Mallorca",
      id: 12,
    },
  ];

  const cardCity = (city) => {
    return (
      <div className="cards" key={city.title}>
        <div className="cards_item">
          <div className="card">
            <div className="card_image">
              <img src={city.url} alt={city.title} />
            </div>
            <div className="card_content">
              <h2 className="card_title">{city.title}</h2>
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
