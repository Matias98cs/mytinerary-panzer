import React from "react";
import Activity from "./Activity";
import '../style/Itinerary.css'

function Itinerary({ item }) {

  return (
      <div className="Itinerary-container" key={item._id}>
        <h2>Itinerary</h2>
        <div className="itinerary-title">
          <p>Name:{item.name}</p>
        </div>
        <Activity data={item._id} />
        <div className="itinerary-price">
          <p>Duration: {item.duration}hs</p>
          <p>Price: ${item.price}</p>
        </div>
      </div>
  );
}

export default Itinerary;
