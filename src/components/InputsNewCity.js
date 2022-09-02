import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import "../style/InputsCities.css";
import InputForm from "./InputsForm/InputForm";

export default function InputsNewCity() {
  const formRef = useRef();
  const [data, setData] = useState([]);

  const URL = "http://localhost:4000/cities";

  const { city, country, photo, population, fundation, description } = data;
  useEffect(() => {
    axios
      .post(URL, {
        city : city,
        country : country,
        photo: photo,
        population : population,
        fundation : fundation,
        description:description
      })
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [data]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formCities = document.querySelector("#form-cities");

    const forData = new FormData(formRef.current);
    const values = Object.fromEntries(forData);
    setData(values);
    formCities.reset();
  };

  return (
    <form
      id="form-cities"
      className="Inputs-container"
      onSubmit={handleSubmit}
      ref={formRef}
    >
      <InputForm />
      <button className="btn-form" type="submit">Send</button>
    </form>
  );
}
