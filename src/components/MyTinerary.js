import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  useGetAllItinerariesQuery,
  useItinerariesAllMutation,
} from "../features/myTineraryAPI";
import "../style/MyTinerary.css";
import { Link as LinkRouter } from "react-router-dom";
import { useDeleteItineraryMutation } from "../features/itineraryAPI";
import { setReload } from "../features/likeSlice";
import { setMessage } from "../features/messageSlice";

const MyTinerary = () => {
  const [itineraryDelete] = useDeleteItineraryMutation();
  const userId = useSelector((state) => state.auth.userId);
  const [itine, setItine] = useState([]);
  const [findItineraries] = useItinerariesAllMutation();
  const dispatch = useDispatch();
  const reload = useSelector((state) => state.like.reload);
  const user = useSelector((state) => state.auth.user);

  async function getItireraries() {
    try {
      let res = await findItineraries(userId);
      if (res.data?.success) {
        if (res.data?.response.length > 0) {
          setItine(res.data.response);
        } else {
          setItine([]);
        }
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function deleteItinerary(key) {
    try {
      let res = await itineraryDelete(key);
      if (res.data?.success) {
        dispatch(setReload());
        dispatch(
          setMessage({
            message: "Deleted itinerary",
            success: true,
          })
        );
      } else {
        console.log(res.data);
      }
    } catch (error) {}
  }

  useEffect(() => {
    getItireraries();
  }, [reload, userId]);

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
            <p>{item?.tags}</p>
          </div>
          <LinkRouter
            className="mytinerary-btn-edit"
            to={`/edit-itinerary/${item?._id} `}
          >
            Edit itinerary
          </LinkRouter>
          <button
            className="mytinerary-btn-delete"
            onClick={() => deleteItinerary(item?._id)}
          >
            Delete
          </button>
        </div>
      </div>
    );
  };
  return (
    <>
      {itine.length > 0 ? (
        <>
          <div className="mytinerary-container">
            <h1>My Tineraries</h1>
            <img className="mytinerary-img" src={user.photo} alt="photo" />
            <div className="mytinerary-user">
              <div className="mytinerary-profile">
                <h3>{user.name}</h3>
                <h3>{user.mail}</h3>
              </div>
            </div>
          </div>
          <div className="mytinerary-general">{itine?.map(showItinerary)}</div>
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
