import React from 'react'
import CallToAction from '../components/CallToAction'
import '../style/PageNotFound.css'

export default function PageNotFound() {
  return (
    <>
      <div className='Not-found-container'>
        <div>
          <img src="./images/kisspng-http-404-computer-icons-clip-art-5afe161aa89745.5389736815266012426906.png" alt="" />
        </div>
        <div className='Not-found-text'>
          <p>This page is missing.</p>
        </div>
        <div className='Not-found-btn'>
          <CallToAction linkto='/' btnText={'GO HOME'}/>
        </div>
      </div>
    </>
  )
}
