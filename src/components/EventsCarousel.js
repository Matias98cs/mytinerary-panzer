import React from 'react'
import Carousel from './Carousel'


function EventsCarousel() {

    let carouselObj = [
        {
            url: './images/bariloche.jpg',
            title: 'Bariloche',
            id: 1
        },
        {
            url: './images/paris1.jpg',
            title: 'Paris',
            id: 2
        },
        {
            url: './images/valencia.jpg',
            title: 'Valencia',
            id: 3
        },
        {
            url: './images/Cancun.jpg',
            title: 'Cancun',
            id: 4
        },
        {
            url: './images/egypto.jpg',
            title: 'Egypto',
            id: 5
        },
        {
            url: './images/tokio.jpg',
            title: 'Tokio',
            id: 6
        },
        {
            url: './images/abu_dabi.jpg',
            title: 'Abu Dabi',
            id: 7
        },
        {
            url: './images/camboya.jpg',
            title: 'Camboya',
            id: 8
        },
        {
            url: './images/rio_de_janeiro.jpeg',
            title: 'Río de Janeiro',
            id: 9
        },
        {
            url: './images/dublin.jpg',
            title: 'Dublín',
            id: 10
        },
        {
            url: './images/sidney.jpg',
            title: 'Sidney',
            id: 11
        },
        {
            url: './images/mallorca.jpg',
            title: 'Mallorca',
            id: 12
        }
    ]

  return (
    <Carousel data={carouselObj} range={4} text="Popular Cities" interval={4} slides={3}/>
  )
}

export default EventsCarousel;