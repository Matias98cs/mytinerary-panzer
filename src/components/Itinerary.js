import React, { useEffect, useState } from "react";
import Activity from "./Activity";
import Comments from "./Comments";
import "../style/Itinerary.css"


function Itinerary({ item }) {

  return (
    <div className="itinerary-container">
      <h2>Itinerary</h2>
      <div className="itinerary-title" key={item._id}>
        <p>{item.name}</p>
      </div>
      <Activity data={item._id} />
      <div className="itinerary-price">  
        <p>Duration: {item.duration} hours</p>
        <p>Price: ${item.price}</p>
      </div>       
    </div>
  );
}

export default Itinerary;
