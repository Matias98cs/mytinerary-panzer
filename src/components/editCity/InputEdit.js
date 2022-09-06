import React from "react";

function InputEdit({ city }) {
  return (
    <>
     
      <input name="_id" defaultValue={city?._id} />
      <input type="text" name="city" defaultValue={city?.city} />
      <input type="text" name="country" defaultValue={city?.country} />
      <input type="text" name="photo" defaultValue={city?.photo} />
      <input
        type="number"
        name="population"
        defaultValue={city?.population}
      />
      <input
        type="date"
        name="fundation"
        defaultValue={city?.fundation ? new Date(city?.fundation).toISOString().substring(0,10) : null}
      />
       <input
        rows="4"
        cols="50"
        name="description"
        defaultValue={city?.description}
        ></input>
    </>
  );
}

export default InputEdit;
