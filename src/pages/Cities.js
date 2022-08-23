import React from 'react'
import EventsCarousel from '../components/EventsCarousel'
import '../style/Cities.css'

export default function Cities() {
  return (
    <>
      <form className='form-input-text'>
        <input type="text" placeholder=' Find City'/>
      </form>
      <EventsCarousel/>
    </>
  )
}
