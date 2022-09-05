import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import "../style/InputsCities.css";
import InputForm from "./InputsForm/InputForm";
import {useGetPostNewCityMutation} from '../features/citiesAPI'


export default function InputsNewCity() {
  const formRef = useRef();
  const [data, setData] = useState([]);

  const { city, country, photo, population, fundation, description } = data;

  const [addNewPost, response] = useGetPostNewCityMutation()

  useEffect( () => {
    addNewPost(data)
    .unwrap()
    .then((succes) => console.log(succes))
    .catch((error) => console.log(error))
    
  },[data])

  const handleSubmit = (e) => {
    e.preventDefault();
    const formCities = document.querySelector("#form-cities");

    const forData = new FormData(formRef.current);
    const values = Object.fromEntries(forData);
    setData(values);
    formCities.reset();
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
        <button className="btn-form" type="submit">Send</button>
      </form>
    </>
  );
}
