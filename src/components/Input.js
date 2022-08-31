import React from "react";
import '../style/Cities.css'

export default function Input({inputSearch}) {

  const takeValue = (e) => {
    const search = e.target.value
    inputSearch(upperCaseOne(search))
  }

  function upperCaseOne(input){
    return input.charAt(0).toUpperCase() + input.slice(1)
  }
  return (
    <>
      <div className="form-input-text">
        <input 
          type="text"  
          id="input"  
          placeholder="Find city" 
          onChange={takeValue}
          />
      </div>
    </>
  );
}
