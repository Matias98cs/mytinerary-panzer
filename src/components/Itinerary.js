import Activity from "./Activity";
import '../style/Itinerary.css'
import React, { useEffect, useState } from "react";
import LikeDislike from "./like/LikeDislike";
import DisplayComments from "./DisplayComments";


function Itinerary({ item }) {
  const [open, setOpen] = useState(false)
  const [viewMore, setViewMore] = useState("View More")

  const handleOpenComments = () => {
    if (open === true) {
      setOpen(false);
      setViewMore("View more");
    } else {
      setOpen(true);
      setViewMore("View Less")
    }
  };
  return (
    <div className="Itinerary-container" key={item._id}>
      <div className="itinerary-title">
        <h3>{item.name}</h3>
      </div>
      <Activity data={item._id}  />
      <div className="itinerary-price">
        <p>Duration: {item.duration}hs</p>
        <LikeDislike item={item}/>
        <p>Price: ${item.price}</p>
      </div>
      <div className='itinerary-comment-container'>
          <div className='itinerary-comment-user'>
            <div className='itinerary-comment'>
              {
                open
                  ?
                  <DisplayComments id={item._id} />
                  :
                  null
              }
            </div>
          </div>
          <div className="itinerary-comment-button">
            <button className="btn-comment" onClick={handleOpenComments}><span>{viewMore}</span></button>
          </div>        
      </div>
    </div>

  );
}

export default Itinerary;
