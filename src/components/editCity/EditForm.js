import React, { useEffect, useRef, useState } from "react";
import Selects from "./Selects";
import InputEdit from "./InputEdit";
import "../../style/FormEditCity.css";
import {
  useGetUpdateCityMutation,
  useGetCityByIdQuery
} from "../../features/citiesAPI";
import Alerts from "../Alert/Alerts";
import {setMessage} from '../../features/messageSlice'
import { useDispatch, useSelector } from "react-redux";
import {setReload} from '../../features/likeSlice'


function EditForm() {
  const formRef = useRef();
  const [error, setError] = useState("");
  const reload = useSelector(state => state.like.reload)
  const [valueSelect, setValueSelect] = useState("");
  let { data: city, refetch } = useGetCityByIdQuery(valueSelect);
  const [UpdateNewCity] = useGetUpdateCityMutation();
  const dispatch = useDispatch()

  function takeValueSelect(value) {
    setValueSelect(value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const formCities = document.querySelector("#form-cities");
    const forData = new FormData(formRef.current);
    const values = Object.fromEntries(forData);
    values.id = city.response?._id
    if(values.city == "" || values.country == "" || values.population == "" || values.fundation == "" || values.photo == ""){
      dispatch(setMessage({
        message: 'Please enter all data',
        success: false
      }))
    }else{
      UpdateNewCity(values)
        .unwrap()
        .then((resp) => {
          formCities.reset();
          setValueSelect("");
          dispatch(setReload())
          dispatch(setMessage({
            message: "The city was edited",
            success: true
          }))
        })
        .catch((error) => {
          dispatch(setMessage({
            message: error.data.success,
            success: false
          }))
        });
    }
  };

  useEffect(() => {
    refetch()
  }, [reload])

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
    </>
  );
}

export default EditForm;
