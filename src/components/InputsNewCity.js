import React, { useRef, useState } from "react";
import "../style/InputsCities.css";
import InputForm from "./InputsForm/InputForm";
import { useGetPostNewCityMutation } from "../features/citiesAPI";
import Alerts from "./Alert/Alerts";

export default function InputsNewCity() {
  const formRef = useRef();
  const [error, setError] = useState("");
  const [succes, setSucces] = useState("")

  const [addNewPost] = useGetPostNewCityMutation();
  const formCities = document.querySelector("#form-cities");

  function sendCity(values) {
    addNewPost(values)
      .unwrap()
      .then((succes) => {
        setSucces("City created")
        formCities.reset()
      })
      .catch((error) => {
        setError(error.data.message);
      });
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const forData = new FormData(formRef.current);
    const values = Object.fromEntries(forData);
    if(values.city == "" || values.country == "" || values.population == "" || values.fundation == "" || values.photo == ""){
      setError('Please enter all data')
    }else{
      sendCity(values);
      setError("")
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
        <Alerts succes={succes} error={error}/>
    </>
  );
}
