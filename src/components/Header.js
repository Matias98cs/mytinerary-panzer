import React from 'react'
import {Link as LinkRouter} from 'react-router-dom'


const page = [
    {name:'Home', to:'/'},
    {name:'Cities', to: '/cities'},
]
const link = (page)=> <LinkRouter to={page.to}>{page.name} </LinkRouter>

export default function Header() {
    
    return (
        <div>
            {page.map(link)}
        </div>
    )
    }
