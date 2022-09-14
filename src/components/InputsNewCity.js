import React, { useRef, useState } from "react";
import "../style/InputsCities.css";
import InputForm from "./InputsForm/InputForm";
import { useGetPostNewCityMutation } from "../features/citiesAPI";
import Alerts from "./Alert/Alerts";

export default function InputsNewCity() {
  const formRef = useRef();
  const [error, setError] = useState("");

  const [addNewPost] = useGetPostNewCityMutation();
  const formCities = document.querySelector("#form-cities");

  function sendCity(values) {
    addNewPost(values)
      .unwrap()
      .then((succes) => {
        setError("City created")
        formCities.reset()
      })
      .catch((error) => {
        setError(error.data.message);
      });
  }

  const handleSubmit = (e) => {
    setError("")
    e.preventDefault();

    const forData = new FormData(formRef.current);
    const values = Object.fromEntries(forData);
    if(values.city == "" || values.country == "" || values.population == "" || values.fundation == "" || values.photo == ""){
      setError('Please enter all data')
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
      {/* {error ? <p>{error}</p> : null} */}
      <Alerts error={error}/>
    </>
  );
}
