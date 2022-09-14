import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import "../style/InputsCities.css";
import InputForm from "./InputsForm/InputForm";
import {useGetPostNewCityMutation} from '../features/citiesAPI'


export default function InputsNewCity() {
  const formRef = useRef();
  const [data, setData] = useState([]);


  const [addNewPost] = useGetPostNewCityMutation()
  const formCities = document.querySelector("#form-cities");

  function sendCity() {
    addNewPost(data)
    .unwrap()
    .then((succes) => console.log(succes))
    .catch((error) => {
      console.log(error.data.message)
    })
  }


  const handleSubmit = (e) => {
    e.preventDefault();

    const forData = new FormData(formRef.current);
    const values = Object.fromEntries(forData);
    setData(values);
    sendCity();
    formCities.reset();
  };

  console.log(data)

  return (
    <>
      <form
        id="form-cities"
        className="Inputs-container"
        onSubmit={handleSubmit}
        ref={formRef}
      >
        
        <InputForm />
        <button className="btn-form" type="submit">Send</button>
      </form>
    </>
  );
}
