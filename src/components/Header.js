import React from 'react'
import {Link as LinkRouter} from 'react-router-dom'
import '../style/Header.css'

const page = [
    {name:'Home', to:'/'},
    {name:'Cities', to: '/cities'},
]
const link = (page)=> <LinkRouter className='Header-Link' to={page.to}>{page.name} </LinkRouter>

export default function Header() {
    
    return (
        <header>
            <div className='Header-logo'>
            <img src="images/logo.png" alt="" />    
            </div>
            <div className='Header-link'>
            {page.map(link)}
            <div className='Header-login'>
            <img src='./images/pngegg.png' alt=''/>       
            </div>
            </div>
        </header>
    )
    }
