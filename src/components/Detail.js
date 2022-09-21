import React, { useState } from "react";
import "../style/Detail.css";
import { useParams } from "react-router-dom";
import { Link as LinkRouter } from "react-router-dom";
import { useGetCityByIdQuery } from "../features/citiesAPI";
import { useGetAllItinerariesQuery } from "../features/itineraryAPI";
import Itinerarty from "./Itinerary";
import NewItinerary from "../pages/NewItinerary";

export default function Detail() {
  const [open, setOpen] = useState(false)
  const { id } = useParams();
  const { data: cities } = useGetCityByIdQuery(id);
  const { data: itinerary } = useGetAllItinerariesQuery(id);
  let newCity = cities?.response;
  let date = new Date(newCity?.fundation);
  let findItinerary = itinerary?.response;


  const handleOpenMenu = () => {
    if (open === true) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  };

  return (
    <div className="Details-city-contaier">
      <div className="Details_cards" key={newCity?._id}>
        <div className="Detail_image">
          <img src={newCity?.photo} alt={newCity?.city} />
        </div>
        <div className="Detail_content">
          <h2 className="Detail_card_title">{newCity?.city}</h2>
          <h3>Country: {newCity?.country}</h3>
          <p className="Detail-Text">Population: {newCity?.population}</p>
          <p className="Detail-Text">Fundation: {date.getFullYear()}</p>
          <p className="Detail-Text">
            Description:{" "}
            {newCity?.description ? newCity?.description.slice(0, 140) : null}
            ...
          </p>
          <LinkRouter to="/cities" className="btn-details">
            Go back
          </LinkRouter>
          <button onClick={handleOpenMenu} className="btn-details">Add itinerary</button>
        </div>
      </div>
      {
        open
        ?
        <NewItinerary name={newCity?.city} id={newCity?._id} />
        :
        null
      }
      {findItinerary?.map((item) => (
        <Itinerarty item={item} key={item._id} />
      ))}
    </div>
  );
}
