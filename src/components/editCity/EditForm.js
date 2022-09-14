import React, { useEffect, useRef, useState } from "react";
import Selects from "./Selects";
import InputEdit from "./InputEdit";
import "../../style/FormEditCity.css";
import {
  useGetUpdateCityMutation,
  useGetCityByIdQuery,
  useGetAllcitiesQuery
} from "../../features/citiesAPI";

function EditForm() {
  const formRef = useRef();
  const [valueSelect, setValueSelect] = useState("");
  let { data: city } = useGetCityByIdQuery(valueSelect);
  const [UpdateNewCity] = useGetUpdateCityMutation();

  function takeValueSelect(value) {
    setValueSelect(value);
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const formCities = document.querySelector("#form-cities");

    const forData = new FormData(formRef.current);
    const values = Object.fromEntries(forData);
    UpdateNewCity(values)
      .unwrap()
      .then((resp) => console.log(resp))
      .catch((error) => console.log(error));
    setValueSelect("");
    formCities.reset();
  };
  
  return (
    <form
      className="Form-editCity"
      id="form-cities"
      onSubmit={handleSubmit}
      ref={formRef}
    >
      <p>Cities</p>
      <Selects takeValueSelect={takeValueSelect} />
      <InputEdit city={city && city.response} />
      <button type="submit">Edit City</button>
    </form>
  );
}

export default EditForm;
