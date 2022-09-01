import React from "react";
import { Link as LinkRouter} from "react-router-dom";
import "../../style/CityCards.css";


function Card({ cities }) {
  const showCard = (city) => {
    return (
      <div className="cards" key={city.city}>
        <div className="cards_item">
          <div className="card">
            <div className="card_image">
              <img src={city.photo} alt={city.city} />
            </div>
            <div className="card_content">
              <h2 className="card_title">{city.city}</h2>
              <p className="card_text">{city.description ? city.description.slice(0,120) : null}...</p>
              <LinkRouter to={city._id} className="btn card_btn">Read More</LinkRouter>

            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="cityCard-container">
        {cities.map(showCard)}
    </div>
  );
}

export default Card;
