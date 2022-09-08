import React from "react";

function InputEdit({ city }) {
  return (
    <div className="container-inputs">
      <input id="hide-id" name="_id" defaultValue={city?._id} />
      <label htmlFor={city?.city}>
        City
        <input type="text" name="city" defaultValue={city?.city} id={city?.city} />
      </label>
      <label  htmlFor={city?.country}>
        Country
        <input type="text" name="country" defaultValue={city?.country} id={city?.country} />
      </label>
      <label>
        Photo
        <input type="text" name="photo" defaultValue={city?.photo} />
      </label>
      <label>
        Population
        <input type="number" name="population" defaultValue={city?.population}/>
      </label>
      <label>
        Fundation
        <input type="date" name="fundation" defaultValue={city?.fundation ? new Date(city?.fundation).toISOString().substring(0,10) : null}/>
      </label>
      <label>
        Description
        <input id="input-description" name="description" defaultValue={city?.description}/>
      </label>
    </div>
  );
}

export default InputEdit;
