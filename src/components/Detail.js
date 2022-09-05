import React from 'react'
import '../style/Detail.css'
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import axios from "axios";
import Card from './cardsCities/Card';
import { Link as LinkRouter} from "react-router-dom";

export default function Detail() {
    const { id } = useParams()
    const [cities, setCityData] = useState({})
    let date = new Date(cities.fundation)

    useEffect(() => {
        axios.get(`http://localhost:4000/cities/${id}`)
            .then(response => {
                setCityData(response.data.response)
            })
    }, [])
    
    return (
        <div className='Detail-container2'>
            <div className="Detail_cards" key={cities._id}>
                <div className="Detail_cards_item">
                    <div className="Detail_card">
                        <div className="Detail_image">
                            <img src={cities.photo} alt={cities.city} />
                        </div>
                        <div className="Detail_content">
                            <h2 className="Detail_card_title">{cities.city}</h2>
                            <h3>Country: {cities.country}</h3>
                            <p className='Detail-Text'>Population: {cities.population}</p>
                            <p className='Detail-Text'>Fundation: {date.getFullYear()}</p>
                            <p className='Detail-Text'>Description: {cities.description ? cities.description.slice(0, 120) : null}...</p>
                            <LinkRouter to='/cities' className="btn card_btn">Go back</LinkRouter>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
