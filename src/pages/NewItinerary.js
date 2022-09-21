import React, { useRef } from "react";
import { useSelector } from "react-redux";
import itineraryAPI, { useGetPostNewItineraryMutation } from "../features/itineraryAPI";
import { useCreateActivityMutation } from "../features/activities.API";
import "../style/NewItinerary.css";

function NewItinerary({ name, id }) {
  const formRef = useRef();
  const userId = useSelector(state => state.auth.userId)
  const [postItinerary] = useGetPostNewItineraryMutation()
  const [postActivity] = useCreateActivityMutation()

  const handleSubmit = (e) => {
    e.preventDefault();
    const forData = new FormData(formRef.current);
    const values = Object.fromEntries(forData);

    const dataItienrary = {
        name: values.name,
        price: values.price,
        tags: [values.tags],
        duration: values.duration,
        city: id,
        user: userId,
        likes: [0]
    }

    const dataAcitity = {
        name: values.nameacti,
        photo: values.photoacti,
    }
    addNewItine(dataItienrary, dataAcitity)
  };

  async function addNewItine(dataIti, dataActi) {
    try{
        let res = await postItinerary(dataIti)
        if(res.data?.success){
            dataActi.itinerary = res.data.response._id
            await postActivity(dataActi)
        }
    }catch(error){
        console.log(error)
    }
  }

  return (
    <div className="form-new-itinerary">
      <h1>Add new Itinerary</h1>
      <form onSubmit={handleSubmit} ref={formRef}>
        <div className="frm-nw-iti-inputs">
          <label>
            Name
            <input type="text" name="name" />
          </label>
          <label>
            Price
            <input type="number" name="price" />
          </label>
          <label>
            Tags
            <input type="text" name="tags" />
          </label>
          <label>
            Duration
            <input type="number" name="duration" />
          </label>
        </div>
        <div className="form-activities">
            <label>
                Name Activity
                <input type="text" name="nameacti" />
            </label>
            <label>
                Photo Activity
                <input type="text" name="photoacti" />
            </label>
        </div>
        <button type="submit">Save</button>
      </form>
    </div>
  );
}

export default NewItinerary;
