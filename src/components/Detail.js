import React from 'react'
import '../style/Detail.css'
import { useParams } from "react-router-dom"
import { Link as LinkRouter} from "react-router-dom";
import { useGetCityByIdQuery } from '../features/citiesAPI';
import { useGetAllItinerariesQuery } from '../features/itineraryAPI';
import ItinerariesCity from './details/ItinerariesCity';

export default function Detail() {
    const { id } = useParams()
    const {data :cities} = useGetCityByIdQuery(id)
    const {data : itinerary} = useGetAllItinerariesQuery(id)
    let newCity = cities?.response
    let date = new Date(newCity?.fundation)
    let findItinerary = itinerary?.response
    return (
        <div className='Detail-container2'>
            <div className="Detail_cards" key={newCity?._id}>
                <div className="Detail_cards_item">
                    <div className="Detail_card">
                        <div className="Detail_image">
                            <img src={newCity?.photo} alt={newCity?.city} />
                        </div>
                        <div className="Detail_content">
                            <h2 className="Detail_card_title">{newCity?.city}</h2>
                            <h3>Country: {newCity?.country}</h3>
                            <p className='Detail-Text'>Population: {newCity?.population}</p>
                            <p className='Detail-Text'>Fundation: {date.getFullYear()}</p>
                            <p className='Detail-Text'>Description: {newCity?.description ? newCity?.description.slice(0, 120) : null}...</p>
                            <LinkRouter to='/cities' className="btn card_btn">Go back</LinkRouter>
                        </div>
                    </div>
                </div>
            </div>
            <ItinerariesCity findItinerary={findItinerary} />
        </div>
    )
}
