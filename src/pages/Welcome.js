import React from 'react'
import CallToAction from '../components/CallToAction'
import '../style/Welcome.css'

export default function Welcome() {
  return (
    <div className='Welcome-container'>
        <h1 className='Welcome-title'><span>M</span>y <span>T</span>inerary</h1>
        <div className='Welcome-title-logo'>
            <img src="images/logo.png" alt="" />
            <h3>Find your perfect trip, designed by insiders who know and love their cities!"</h3>
        </div>
        <CallToAction />
    </div>
    
  )
}
