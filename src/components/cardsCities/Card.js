import React from "react";
import { Link as LinkRouter} from "react-router-dom";
import "../../style/CityCards.css";


function Card({ cities }) {

  const showCard = (city) => {
    return (
        <div className="cards_item" key={city._id}>
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
    );
  };

  return (
    <div className="cityCard-container">
      {
        cities.response?.length > 0
        ?
        cities && cities.response.map(showCard)
        :
        <strong className="nothing-found">Nothing found</strong>
      }
    </div>
  );
}

export default Card;
