import React from 'react';
import '../style/Footer.css';
import Facebok from '../images/icons8-facebook-f-24.png';
import Instagram from '../images/icons8-instagram-24.png';
import Whatsapp from '../images/icons8-whatsapp-24.png';
import Youtube from '../images/icons8-youtube-play-24.png';



export default function Footer() {
  return (
    <div className='Footer-container'>
        <div className='Footer-socials'>
            <a href="#">
                <img src={Facebok} alt="" />
            </a>
            <a href="#">
                <img src={Instagram} alt="" />
            </a>
            <a href="#">
                <img src={Whatsapp} alt="" />
            </a>  
            <a href="#">
                <img src={Youtube} alt="" />
            </a>
        </div>
        <div className='Footer-adress'>
            <p>Address: <strong>Río de Janeiro 300, Caballito</strong></p>
            <p>Email: <a href="mailto:dsadsad@gmail.com"><strong>mytinerary@gmail.com</strong></a></p>
        </div>
    </div>
  )
}
