import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import itineraryAPI, { useGetPostNewItineraryMutation } from "../features/itineraryAPI";
import { useCreateActivityMutation } from "../features/activities.API";
import "../style/NewItinerary.css";
import { setReload } from "../features/likeSlice";
import { setMessage } from "../features/messageSlice";

function NewItinerary({ name, id }) {
  const formRef = useRef();
  const userId = useSelector(state => state.auth.userId)
  const [postItinerary] = useGetPostNewItineraryMutation()
  const [postActivity] = useCreateActivityMutation()
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault();
    const forData = new FormData(formRef.current);
    const values = Object.fromEntries(forData);
    
    if(values.duration != "" || values.name != "" || values.nameacti != "" || values.photoacti != "" || values.price != "" || values.tags != ""){      
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
    }else{
      dispatch(setMessage({
        message: "Complete all the information",
        success: false
      }))
    }
  };

  async function addNewItine(dataIti, dataActi) {
    const formu = document.querySelector('#formNewIti')
    try{
        let res = await postItinerary(dataIti)
        if(res.data?.success){
            dataActi.itinerary = res.data.response._id
            let resAct = await postActivity(dataActi)
            if(resAct.data?.success){
              // console.log(resAct.data)
              formu.reset() 
              dispatch(setReload())
              dispatch(setMessage({
                message: "Created Itinerary",
                success: true
              }))
            }else{
              // console.log(resAct.error)
              dispatch(setMessage({
                message: resAct.error.data.message,
                success: false
              }))
            }
        }else{
          // console.log(res.error.data)
          dispatch(setMessage({
            message: res.error.data.message,
            success: false
          }))
        }
    }catch(error){
        console.log(error)
    }
  }

  return (
    <div className="form-new-itinerary">
      <h1>ADD NEW ITINERARY</h1>
      <form onSubmit={handleSubmit} ref={formRef} id="formNewIti">
        <div className="frm-nw-iti-inputs">
            <input type="text" name="name" placeholder="Name"/>
            <input type="number" name="price" placeholder="Price"/>
            <input type="text" name="tags" placeholder="Tags" />
            <input type="number" name="duration"  placeholder="Duration"/>
        </div>
        <div className="form-activities">
            <strong>ACTIVITY</strong>
            <input type="text" name="nameacti" placeholder="Name Activity" />
            <input type="text" name="photoacti"  placeholder="Photo Activity"/>
        </div>
        <button type="submit">Save</button>
      </form>
    </div>
  );
}

export default NewItinerary;
