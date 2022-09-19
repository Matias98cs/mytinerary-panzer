import React, { useEffect, useState} from "react";
import { useGetAllUsersQuery } from "../features/myTineraryAPI";
import "../style/MyTinerary.css";

const MyTinerary = () => {

  let userId = JSON.parse(localStorage.getItem("user"))
  const { data: user } = useGetAllUsersQuery(userId);  
  let userDetail = user?.response

  const showItinerary = (item) => {
    return (
      <div className="mytinerary-description" key={item?._id}>
        <div className="mytinerary-content">
          <h3>{item?.name}</h3>
          <img src={item?.city.photo} alt="photo" />
          <div className="mytinerary-country">
            <h3>{item?.city.country}</h3>
            <p>{item?.city.city}</p>
          </div>
          <div className="mytinerary-duration">
            <p>Duration: {item?.duration} hours</p>
            <p>Price: ${item?.price}</p>
            <p>Likes: {item?.likes}</p>
            <p>{item?.tags}</p>
          </div>
        </div>
      </div>
    );
  };
  return (
    <>
      {user ? (
        <> 
          <div className="mytinerary-container">
            <h1>My Tineraries</h1>
            <img
              className="mytinerary-img"
              src={userDetail[0].user?.photo}
              alt="photo"
            />
            <div className="mytinerary-user">
              <div className="mytinerary-profile">
                <h3>{userDetail[0].user?.name}</h3>
                <h3>{userDetail[0].user?.mail}</h3>
              </div>
            </div>
          </div>
          <div className="mytinerary-general">
            {user && user.response?.map(showItinerary)}
          </div>
        </>
      ) : (
        <div className="itinerarios-clear">
          <div className="title-clear">
            <h2>No Itineraries Yet</h2>
          </div>
        </div>
      )}
    </>
  );
};

export default MyTinerary;
