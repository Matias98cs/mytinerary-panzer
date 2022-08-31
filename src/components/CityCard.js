import React, { useEffect, useState } from "react";
import "../style/CityCards.css";
import {Link as LinkRouter} from 'react-router-dom'
import axios from "axios";

function CityCard() {

  const [cities, setCities] = useState([])

  useEffect(() => {
    axios.get('http://localhost:4000/cities/all')
      .then(response => setCities(response.data.response))
  }, [])


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
                {city.description.slice(0, 120)}...
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
            {cities.map(cardCity)}
        </div>
    </>
  )
}

export default CityCard;
