import React from 'react'
import '../style/Carousel.css'

export default function Carousel(props) {

    console.log(props.data)

    const range = props.range
    const start = 0
    const end = start + range
    const photos = props.data


    const cityAndName = (item) => (
            <div className='Carousel-card'>
                <img src={item.url} alt="photoCity" />
                <p>{item.title}</p>
            </div>
    )

    return (
        <>
            <div className='Carousel-title'>
                <h1>{props.text}</h1>
            </div>
            <div className='Carousel-container'>
                {photos.slice(start, end).map(cityAndName)}
            </div>
        </>
    )
}
