import React from 'react'
import '../style/Detail.css'
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import axios from "axios";
import Card from './cardsCities/Card';
import { Link as LinkRouter} from "react-router-dom";
import apiurl from '../api';

export default function Detail() {
    const { id } = useParams()
    const [cities, setCityData] = useState({})
    let date = new Date(cities.fundation)

    useEffect(() => {
        axios.get(`${apiurl}/cities/${id}`)
            .then(response => {
                setCityData(response.data.response)
            })
    }, [])
    
    return (
        <div className='Detail-container'>
            <div className="cards" key={cities._id}>
                <div className="cards_item">
                    <div className="card">
                        <div className="card_image">
                            <img src={cities.photo} alt={cities.city} />
                        </div>
                        <div className="card_content">
                            <h2 className="card_title">{cities.city}</h2>
                            <h2>{cities.country}</h2>
                            <p className="card_text">{cities.description ? cities.description.slice(0, 120) : null}...</p>
                            <p>Population:{cities.population}</p>
                            <p>Fundation:{date.getFullYear()}</p>
                            <LinkRouter to='/cities' className="btn card_btn">Go back</LinkRouter>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
