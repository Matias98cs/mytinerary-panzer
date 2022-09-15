import React, { useRef, useState } from "react";
import Selects from "./Selects";
import InputEdit from "./InputEdit";
import "../../style/FormEditCity.css";
import {
  useGetUpdateCityMutation,
  useGetCityByIdQuery
} from "../../features/citiesAPI";
import Alerts from "../Alert/Alerts";

function EditForm() {
  const formRef = useRef();
  const [error, setError] = useState("");
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
    if(values.city == "" || values.country == "" || values.population == "" || values.fundation == "" || values.photo == ""){
      setError('Please enter all data')
    }else{
      UpdateNewCity(values)
        .unwrap()
        .then((resp) => setError("Edited city"))
        .catch((error) => setError(error.message));
      setValueSelect("");
      formCities.reset();
    }
  };

  return (
    <>
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
      <Alerts error={error} />
    </>
  );
}

export default EditForm;
