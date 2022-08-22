import React from 'react'
import Carousel from './Carousel'


function EventsCarousel() {

    let carouselObj = [
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
        },
        {
            url: 'https://viajes.nationalgeographic.com.es/medio/2021/01/12/egipto_6f0016be_1200x630.jpg',
            title: 'Egypto'
        },
        {
            url: 'https://viajes.nationalgeographic.com.es/medio/2021/01/26/templo-de-asakusa_46a4b335_1200x630.jpg',
            title: 'Tokio'
        },
        {
            url: 'https://content.r9cdn.net/rimg/dimg/a8/85/bbf8aa0b-city-9457-164d6a9147e.jpg?width=1366&height=768&xhint=2731&yhint=1539&crop=true',
            title: 'Abu Dabi'
        },
        {
            url: 'https://heymondo.es/blog/wp-content/uploads/2018/03/vietnam-camboya-15-dias.jpg',
            title: 'Camboya'
        },
        {
            url: 'http://a21.com.mx/sites/default/files/field/image/Rio%20de%20Janeiro%20%281%29.jpeg',
            title: 'Río de Janeiro'
        },
        {
            url: 'https://static.wixstatic.com/media/701e2d_8541cbaf3408406c9d928445989c6c3e~mv2.jpg/v1/fill/w_1000,h_562,al_c,q_90,usm_0.66_1.00_0.01/701e2d_8541cbaf3408406c9d928445989c6c3e~mv2.jpg',
            title: 'Dublín'
        },
        {
            url: 'https://assets.promediateknologi.com/crop/0x0:0x0/x/photo/2022/03/15/3153380302.jpg',
            title: 'Sidney'
        },
        {
            url: 'https://www.clarin.com/img/2019/08/16/J5KWzu7jn_1200x630__1.jpg',
            title: 'Mallorca'
        }
    ]


  return (
    <Carousel data={carouselObj} range={4} text="Popular MYtineraries" />
  )
}

export default EventsCarousel;