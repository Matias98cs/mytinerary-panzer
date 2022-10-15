import React, { useEffect, useState } from "react";
import "../style/Detail.css";
import { useParams } from "react-router-dom";
import { Link as LinkRouter } from "react-router-dom";
import {
  useGetCityByIdQuery,
  useGetCityForIdMutation,
} from "../features/citiesAPI";
import {
  useGetAllItinerariesQuery,
  useItinerariesForDetailsMutation,
} from "../features/itineraryAPI";
import Itinerarty from "./Itinerary";
import NewItinerary from "../pages/NewItinerary";
import { useDispatch, useSelector } from "react-redux";

export default function Detail() {
  const [open, setOpen] = useState(false);
  const { id } = useParams();
  const [dataCity, setDataCity] = useState({});
  const [dataItinerary, setDataItinerary] = useState([]);
  const [getOneCity] = useGetCityForIdMutation();
  const [getItineraries] = useItinerariesForDetailsMutation();
  const logged = useSelector((state) => state.auth.logged);
  let newCity = dataCity;
  let date = new Date(newCity?.fundation);
  let findItinerary = dataItinerary;
  const reload = useSelector(state => state.like.reload) 

  async function getCity() {
    try {
      let res = await getOneCity(id);
      if (res.data.success) {
        setDataCity(res.data.response);
        let resIt = await getItineraries(id);
        if (resIt.data.success) {
          setDataItinerary(resIt.data.response);
        }
      } else {
        console.log(res);
      }
    } catch (error) {
      console.log(error);
    }
  }

  const handleOpenMenu = () => {
    if (open === true) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  };

  useEffect(() => {
    getCity();
  }, [reload, id]);

  return (
    <div className="Details-city-contaier">
      <div className="Details_cards" key={newCity?._id}>
        <div className="Detail_image">
          <img src={newCity?.photo} alt={newCity?.city} />
        </div>
        <div className="Detail_content">
          <h2 className="Detail_card_title">{newCity?.city}</h2>
          <p className="Detail-Text">
            Country: <strong>{newCity?.country}</strong>
          </p>
          <p className="Detail-Text">
            Population: <strong>{newCity?.population}</strong>
          </p>
          <p className="Detail-Text">
            Fundation: <strong>{date.getFullYear()}</strong>
          </p>
          <p className="Detail-Text">
            Description:{" "}
            <strong>
              {newCity?.description ? newCity?.description.slice(0, 140) : null}
              ...
            </strong>
          </p>
          <LinkRouter to="/cities" className="btn-details">
            Go back
          </LinkRouter>
          {logged ? (
            <button onClick={handleOpenMenu} className="btn-details">
              Add itinerary
            </button>
          ) : null}
        </div>
      </div>
      {logged ? (
        open ? (
          <NewItinerary name={newCity?.city} id={newCity?._id} />
        ) : null
      ) : null}
      <h2 className="title-itineraries">ITINERARY</h2>
      {findItinerary?.map((item) => (
        <Itinerarty item={item} key={item._id} />
      ))}
    </div>
  );
}
