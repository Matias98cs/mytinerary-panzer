import React, { useEffect, useState } from "react";
import Carousel from './Carousel'
import axios from "axios";

function EventsCarousel() {
    const [cities, setCities] = useState([])

    useEffect(() => {
        axios.get('http://localhost:4000/cities/all')
            .then(response => setCities(response.data.response))
    }, [])


    return (
        <Carousel data={cities} range={4} text="Popular Cities" interval={4} slides={3} />
    )
}

export default EventsCarousel;