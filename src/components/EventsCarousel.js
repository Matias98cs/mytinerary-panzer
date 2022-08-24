import React from 'react'
import Carousel from './Carousel'


function EventsCarousel() {

    let carouselObj = [
        {
            url: './images/bariloche.jpg',
            title: 'Bariloche'
        },
        {
            url: './images/paris1.jpg',
            title: 'Paris'
        },
        {
            url: './images/valencia.jpg',
            title: 'Valencia'
        },
        {
            url: './images/Cancun.jpg',
            title: 'Cancun'
        },
        {
            url: './images/egypto.jpg',
            title: 'Egypto'
        },
        {
            url: './images/tokio.jpg',
            title: 'Tokio'
        },
        {
            url: './images/abu_dabi.jpg',
            title: 'Abu Dabi'
        },
        {
            url: './images/camboya.jpg',
            title: 'Camboya'
        },
        {
            url: './images/rio_de_janeiro.jpeg',
            title: 'Río de Janeiro'
        },
        {
            url: './images/dublin.jpg',
            title: 'Dublín'
        },
        {
            url: './images/sidney.jpg',
            title: 'Sidney'
        },
        {
            url: './images/mallorca.jpg',
            title: 'Mallorca'
        }
    ]


  return (
    <Carousel data={carouselObj} range={4} text="Popular MYtineraries" interval={4} slides={3}/>
  )
}

export default EventsCarousel;