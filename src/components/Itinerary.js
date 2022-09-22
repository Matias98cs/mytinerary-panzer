import Activity from "./Activity";
import '../style/Itinerary.css'
import React, { useEffect, useState } from "react";
import LikeDislike from "./like/LikeDislike";
import { useDispatch, useSelector } from "react-redux";
import { setLike } from "../features/likeSlice";


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
                  <div className='itinerary-comment-messages'>
                    <h3>Comment!</h3>
                    <div className="itinerary-comment-users">
                      <div className="itinerary-profile"><img src="https://pbs.twimg.com/profile_images/1003643864907993088/eF0VVprg_400x400.jpg" width="50px"  alt=""/></div>
                      <div className= "itinerary-comment-user">
                      <p>Javier:</p>
                      <p>Hello ! 😎</p>
                      </div>
                    </div>
                    <div className="itinerary-comment-users">
                    <div className="itinerary-profile"><img src="https://i0.wp.com/elplanetaurbano.com/wp-content/uploads/2021/08/Diego-Peretti-El-Planeta-Urbano-retrato-2.jpg?resize=640%2C959&ssl=1" width="50px"  alt=""/></div>
                    <div className= "itinerary-comment-user">
                      <p>Matias:</p>
                      <p>Amazing Castle and structures in general!🏯</p>
                    </div>
                    </div>
                    <div className="itinerary-comment-users">
                    <div className="itinerary-profile"><img src="https://efeminista.com/wp-content/uploads/2021/09/gal-gadot-e1620121167681.jpg" width="50px"  alt=""/></div>
                    <div className= "itinerary-comment-user">
                      <p>Eugenia:</p>
                      <p>🐴Horse ride was the best!</p>
                    </div>
                    </div>
                    <div className="itinerary-comment-users">
                    <div className="itinerary-profile"><img src="https://media.revistagq.com/photos/5ca5f6084409cc61e490adac/4:3/w_1912,h_1434,c_limit/cavill_sin_bigote_3806.png" width="50px"  alt=""/></div>
                    <div className= "itinerary-comment-user">
                      <p>Marcos:</p>
                      <p>Lovely tours! There is a lot of places to go! 💪</p>
                    </div>
                    </div>
                    <div className="comment-input-div">
                      <input type= "text" name="comment" id="comment-input" placeholder= "Write your comment here!"/>
                      <svg strokeWidth="currentColor" fill="currentColor" viewBox="0 0 24 24" className="sendComment" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"></path></svg>
                    </div>
                  </div>
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
