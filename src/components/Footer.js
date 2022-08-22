import React from 'react';
import '../style/Footer.css';



export default function Footer() {
  return (
    <div className='Footer-container'>
        <div className='Footer-socials'>
            <a href="#">
                <img src="images/icons8-facebook-f-24.png" alt="" />
            </a>
            <a href="#">
                <img src="images/icons8-instagram-24.png" alt="" />
            </a>
            <a href="#">
                <img src="images/icons8-whatsapp-24.png" alt="" />
            </a>  
            <a href="#">
                <img src="images/icons8-youtube-play-24.png" alt="" />
            </a>
        </div>
        <div className='Footer-logo'>
            <img src="./images/My-Tinerary-logo.png" alt="" />
        </div>
        <div className='Footer-address'>
            <p>Address: <strong>Río de Janeiro 300, Caballito</strong></p>
            <p>Email: <a href="mailto:dsadsad@gmail.com"><strong>mytinerary@gmail.com</strong></a></p>
        </div>
    </div>
  )
}
