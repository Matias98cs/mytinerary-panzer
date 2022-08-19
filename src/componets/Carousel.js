import React from 'react'

export default function Carousel() {

    const carouselObj = [
        {
            url: 'https://barilocheturismo.gob.ar/images/home/map/bariloche_es.png?v3',
            title: 'Bariloche'
        },
        {
            url: 'https://media.staticontent.com/media/pictures/a4d9b809-6976-4e40-aec1-aebfb60fed70',
            title: 'Paris'
        },
        {
            url: 'https://www.broadwaytravel.com/own-files/918/b8820d3d823d73a70f2bb77899bdc/SYAQWSDPUh.jpg',
            title: 'Valencia'
        },
        {
            url: 'https://www.unioncancun.mx/sites/default/files/styles/galeria/public/field/image/ganar_concurso_cancun2.jpg?itok=wp2ypObk',
            title: 'Cancun'
        }
    ]

    const cityAndName = (item) => {
        return (
            <div>
                <img src={item.url} alt="photoCity"/>
                <p>{item.title}</p>
            </div>
        )
    }

  return (
    <div>
        {carouselObj.slice(0,4).map(cityAndName)}
    </div>
  )
}
