import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./cardsCities/Card";
import Input from "./Input";

function CardsAndFind() {
  const [cities, setCities] = useState([]);
  const [find, setFind] = useState("");
  const URL = "http://localhost:4000/cities?city=";

  useEffect(() => {
    axios
      .get(`${URL}${find}`)
      .then((response) => setCities(response.data.response))
      .catch((error) => console.log(error));
  }, [find]);
  function inputSearch(name) {
    setFind(name);
  }

  return (
    <>
      <Input inputSearch={inputSearch} />
      <Card cities={cities} />
    </>
  );
}

export default CardsAndFind;
