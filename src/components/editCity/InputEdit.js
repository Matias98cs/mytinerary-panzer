import React from "react";

function InputEdit({ city }) {
  let cityValues = city?.response;
  return (
    <>
     
      <input disabled name="_id" defaultValue={cityValues?._id} />
      <input type="text" name="city" defaultValue={cityValues?.city} />
      <input type="text" name="country" defaultValue={cityValues?.country} />
      <input type="text" name="photo" defaultValue={cityValues?.photo} />
      <input
        type="number"
        name="population"
        defaultValue={cityValues?.population}
      />
      <input
        type="text"
        name="fundation"
        defaultValue={cityValues?.fundation}
      />
       <textarea
        type="text"
        rows="4"
        cols="50"
        name="description"
        defaultValue={cityValues?.description}
        ></textarea>
    </>
  );
}

export default InputEdit;
