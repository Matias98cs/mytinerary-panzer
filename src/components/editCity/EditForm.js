import React, { useEffect, useRef, useState } from 'react'
import Selects from './Selects'
import InputEdit from './InputEdit'
import '../../style/FormEditCity.css'
import { useGetUpdateCityMutation, useGetCityByIdQuery } from '../../features/citiesAPI'

function EditForm() {
  const formRef = useRef();
  const [valueSelect, setValueSelect] = useState()
  const [valueData, setValueData] = useState([]);
  const {data: city} = useGetCityByIdQuery(valueSelect)
  const [UpdateNewCity] = useGetUpdateCityMutation()

  useEffect(() => {
    UpdateNewCity(valueData)
      .unwrap()
      .then(resp => console.log(resp))
      .catch(error => console.log(error))
  }, [valueData])


  function takeValueSelect(value){
    setValueSelect(value)
  }

  const handleSubmit = e => {
    e.preventDefault();
    const formCities = document.querySelector("#form-cities");

    const forData = new FormData(formRef.current);
    const values = Object.fromEntries(forData);
    setValueData(values)
    formCities.reset();
  }
  
  return (
    <form 
      className='Form-editCity'
      id="form-cities"
      onSubmit={handleSubmit}
      ref={formRef}
      >
        <Selects  takeValueSelect={takeValueSelect}/>
        {
          city 
          ? 
          <InputEdit city={city} />
          :
          null
        }
        <button type='submit'>Edit City</button>
    </form>
  )
}

export default EditForm