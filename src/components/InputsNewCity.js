import React, { useRef, useState } from 'react'
import '../style/InputsCities.css'

export default function InputsNewCity() {
    
    const formRef = useRef()
    let newArray = []

    let nameInput = ["city", "country", "photo", "population", "fundation"];

    const inputsRender = (infor) => {
        return (
            <label className='Input-Label' htmlFor={infor} key={infor}>
                {infor}
                <input type="text" id={infor} name={infor} className="input-value"/>
            </label>
        )
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const formCities = document.querySelector('#form-cities');

        const forData = new FormData(formRef.current)
        const values = Object.fromEntries(forData)

        newArray.push(values)
        console.log(newArray)
        formCities.reset()
    }

  return (
    <form id='form-cities' className='Inputs-container' onSubmit={handleSubmit} ref={formRef}>
        {nameInput.map(inputsRender)}
        <button type='submit'>Send</button>
    </form>
  )
}
