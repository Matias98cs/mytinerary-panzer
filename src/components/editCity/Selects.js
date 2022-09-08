import React, { useEffect, useState } from "react";
import { useGetAllcitiesQuery } from "../../features/citiesAPI";

function Selects({ takeValueSelect }) {
  const { data: cities } = useGetAllcitiesQuery();

  const showOptions = (cityItem) => {
    return (
      <option value={cityItem._id} key={cityItem._id}>
        {cityItem.city}
      </option>
    );
  };

  const handleChange = (e) => {
    let valueSelect = e.target.value;
    takeValueSelect(valueSelect);
  };

  return (
    <select onChange={handleChange}>
      <option>Select City</option>
      {cities && cities.response.map(showOptions)}
    </select>
  );
}

export default Selects;
