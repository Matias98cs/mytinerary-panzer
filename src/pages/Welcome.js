import React from 'react'
import '../style/Welcome.css'
import MyLogo from '../images/logo.png'

export default function Welcome() {
  return (
    <div className='Welcome-container'>
        <div className='Welcome-title-logo'>
            <img src={MyLogo} alt="" />
            <h3>Find your perfect trip, desingned by insiders who know and love their cities!"</h3>
        </div>
        <button>Login</button>
    </div>
  )
}
