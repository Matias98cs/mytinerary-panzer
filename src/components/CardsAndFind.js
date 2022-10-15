import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./cardsCities/Card";
import Input from "./Input";
import {
  useGetCityNameQuery,
  useGetAllcitiesQuery,
} from "../features/citiesAPI";
import { useSelector } from "react-redux";

function CardsAndFind() {
  const [find, setFind] = useState("");
  const reload = useSelector(state => state.like.reload)
  const { data: cities, refetch } = useGetAllcitiesQuery();
  const { data: cityFind } = useGetCityNameQuery(find);

  useEffect(() => {
    refetch()
  }, [reload])

  function inputSearch(name) {
    setFind(name);
  }

  return (
    <>
      <Input inputSearch={inputSearch} />
      <Card cities={cityFind ? cityFind : cities} />
    </>
  );
}

export default CardsAndFind;
