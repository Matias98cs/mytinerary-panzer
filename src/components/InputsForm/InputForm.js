import React from 'react'

function InputForm() {

  let newArrayInput = [
    {name: "city", id: 1, type: "text"},
    {name: "country", id: 2, type: "text"},
    {name: "photo", id: 3, type: "text"},
    {name: "population", id: 4, type: "number", max: 1000000000, min: 1000},
    {name: "fundation", id: 5, type: "date"},
    {name: "description", id: 6, type: "text"}

]

const inputsRender = (infor) => {
  return (
    <div className='Inputs-box'>
      <label className='Input-Label' htmlFor={infor.name} key={infor.id}>
          {infor.name}
      </label>
      <input 
      type={infor.type}
      id={infor.name} 
      name={infor.name}  
      className="Input-value"
      max={infor.max ? infor.max : null}
      min={infor.min ? infor.min : null}
      />
    </div>
  )
}
  return (
    <>
        {newArrayInput.map(inputsRender)}
    </>
  )
}

export default InputForm