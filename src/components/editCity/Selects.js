import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useGetAllcitiesQuery } from "../../features/citiesAPI";

function Selects({ takeValueSelect }) {
  const { data: cities, refetch } = useGetAllcitiesQuery();
  const reload = useSelector(state => state.like.reload)


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

  useEffect(() => {
    refetch()
  }, [reload])

  return (
    <select onChange={handleChange}>
      <option>Select City</option>
      {cities && cities.response.map(showOptions)}
    </select>
  );
}

export default Selects;
