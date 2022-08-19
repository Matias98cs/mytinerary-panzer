import React from 'react'
import '../style/Welcome.css'
import MyLogo from '../images/logo.png'
import MyLogo2 from '../images/avion.png'

export default function Welcome() {
  return (
    <div className='Welcome-container'>
        <h1 className='Welcome-title'><span>M</span>y <span>T</span>inerary</h1>
        <div className='Welcome-title-logo'>
            <img src={MyLogo} alt="" />
            <h3>Find your perfect trip, designed by insiders who know and love their cities!"</h3>
        </div>
        
        <button>Login</button>
    </div>
  )
}
