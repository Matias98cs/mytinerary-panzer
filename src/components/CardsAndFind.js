import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./cardsCities/Card";
import Input from "./Input";
import {useGetCityNameQuery, useGetAllcitiesQuery} from '../features/citiesAPI'

function CardsAndFind() {
  const [find, setFind] = useState("");

  const { data: cities} = useGetAllcitiesQuery()
  const {data: cityFind} = useGetCityNameQuery(find)
  
  function inputSearch(name) {
    setFind(name);
  }

  return (
    <>
      <Input inputSearch={inputSearch} />
      <Card cities={cityFind ? cityFind : cities } />
    </>
  );
}

export default CardsAndFind;
