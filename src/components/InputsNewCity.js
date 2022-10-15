import React, { useRef, useState } from "react";
import "../style/InputsCities.css";
import InputForm from "./InputsForm/InputForm";
import { useGetPostNewCityMutation } from "../features/citiesAPI";
import Alerts from "./Alert/Alerts";
import { useDispatch } from "react-redux";
import {setReload} from '../features/likeSlice'
import {setMessage} from '../features/messageSlice'

export default function InputsNewCity() {
  const formRef = useRef();
  const [addNewPost] = useGetPostNewCityMutation();
  const dispatch = useDispatch()

  async function sendCity(values) {
    const formCities = document.querySelector("#form-cities");

    try {
      let res = await addNewPost(values)
      if(res.data?.success){
        dispatch(setReload())
        formCities.reset()
        dispatch(setMessage({
          message: "City created",
          success: true
        }))
      }else{
        dispatch(setMessage({
          message: res.error.data.message,
          success: false
        }))
      }
    } catch (error) {
      console.log(error)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const forData = new FormData(formRef.current);
    const values = Object.fromEntries(forData);
    if(values.city == "" || values.country == "" || values.population == "" || values.fundation == "" || values.photo == ""){
      dispatch(setMessage({
        message: "Please enter all data",
        success: false
      }))
    }else{
      sendCity(values);
    }
  };

  return (
    <>
      <form
        id="form-cities"
        className="Inputs-container"
        onSubmit={handleSubmit}
        ref={formRef}
      >
        <InputForm />
        <button className="btn-form" type="submit">
          Send
        </button>
      </form>
    </>
  );
}
