import React, { useEffect, useState } from "react";
import Carousel from './Carousel'
import axios from "axios";
import apiurl from "../api";

function EventsCarousel() {
    const [cities, setCities] = useState([])

    useEffect(() => {
        axios.get(`${apiurl}/cities?city=`)
            .then(response => setCities(response.data.response))
    }, [])


    return (
        <Carousel data={cities} range={4} text="Popular Cities" interval={7} slides={3} />
    )
}

export default EventsCarousel;