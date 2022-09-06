import React, { useEffect, useState } from "react";
import Carousel from "./Carousel";
import {useGetAllcitiesQuery} from "../features/citiesAPI";

function EventsCarousel() {

  const { data: cities,  error, isLoading, isSuccess, isFailed } = useGetAllcitiesQuery();

  return <Carousel data={cities} range={4} text="Popular Cities" interval={7} slides={3} />;
}

export default EventsCarousel;