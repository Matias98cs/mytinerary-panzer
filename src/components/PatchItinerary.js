import React, { useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useGetItineraryQuery } from "../features/itineraryAPI";
import { useGetActivityQuery } from "../features/activities.API";
import "../style/PatchItini.css";
import { useUpdateActivityMutation } from "../features/activities.API";
import { useUpdateItineraryMutation } from "../features/itineraryAPI";
import { useDispatch, useSelector } from "react-redux";
import { setMessage } from "../features/messageSlice";
import { setReload } from "../features/likeSlice";

export default function PatchItinerary() {
  let formIti = useRef();
  const { id } = useParams();
  const { data: itinerary } = useGetItineraryQuery(id);
  const { data: activities, refetch } = useGetActivityQuery(id);
  const userId = useSelector((state) => state.auth.userId);
  const [patchItinerary] = useUpdateItineraryMutation();
  const [patchActivity] = useUpdateActivityMutation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const reload = useSelector((state) => state.like.reload);

  let itineraryData = itinerary?.response;
  let activityData = activities?.response;

  function showActivity(item, i) {
    return (
      <>
        <p>Name:</p>
        <input type="text" name={`name_acti_${i}`} defaultValue={item?.name} />
        <p>Photo:</p>
        <input
          type="text"
          name={`photo_acti_${i}`}
          defaultValue={item?.photo}
        />
        <div className="itinerary-acti-img">
          <img src={item?.photo} />
        </div>
      </>
    );
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const formItinerary = new FormData(formIti.current);
    const values = Object.fromEntries(formItinerary);
    let updateItini = {
      id: itineraryData._id,
      name: values.name,
      user: userId,
      price: values.price,
      city: itineraryData.city,
      tags: [values.tags],
      likes: [itineraryData.likes],
      duration: values.duration,
    };
    let updateActi = {
      id: activityData[0]._id,
      name: values.name_acti_0,
      photo: values.photo_acti_0,
      itinerary: itineraryData._id,
    };

    sendItiAndActi(updateItini, updateActi);
  };
  async function sendItiAndActi(dataIti, dataActi) {
    try {
      let res = await patchItinerary(dataIti);
      if (res.data?.success) {
        console.log(res.data);
        dispatch(setReload());
        let resAc = await patchActivity(dataActi);
        if (resAc.data?.success) {
          console.log(resAc.data);
          dispatch(
            setMessage({
              message: "Itinerary updated",
              success: true,
            })
          );
          dispatch(setReload());

          navigate("/mytinerary/mytineraries", { replace: true });
        } else {
          console.log(resAc.error);
        }
      } else {
        console.log(res.error.data);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    refetch();
  }, [reload]);
  return (
    <div className="container-form-itinerary">
      <form className="patchItini-form" onSubmit={handleSubmit} ref={formIti}>
        <div className="patchItini-p">
          <p>Name:</p>
          <input type="text" name="name" defaultValue={itineraryData?.name} />
          <p>Duration:</p>
          <input
            type="number"
            name="duration"
            defaultValue={itineraryData?.duration}
          />
          <p>Price:</p>
          <input
            type="number"
            name="price"
            defaultValue={itineraryData?.price}
          />
          <p>Tags:</p>
          <input type="text" name="tags" defaultValue={itineraryData?.tags} />
          {activityData?.map((item, i) => showActivity(item, i))}
        </div>
        <button className="patchItini-btn" type="submit">
          Save edit
        </button>
      </form>
    </div>
  );
}
