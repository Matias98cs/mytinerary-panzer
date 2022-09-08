import React, { useEffect, useState } from "react";
import Activity from "./Activity";
import Comments from "./Comments";

function Itinerary({ item }) {

  return (
    <>
      <div key={item._id}>
        <p>Name:{item.name}</p>
        <p>Duration:{item.duration}</p>
        <p>Price: ${item.price}</p>
      </div>
      <Activity data={item._id} />
    </>
  );
}

export default Itinerary;
