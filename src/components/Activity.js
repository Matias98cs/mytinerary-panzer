import React from 'react'
import { useGetActivityQuery } from '../features/activities.API'
import '../style/Itinerary.css'

function Activity(data) {

    const {data: activity} = useGetActivityQuery(data.data)
    let activities  = activity?.response

    const showActivity = (item) => {
        return(
            <div key={item._id} className="itinerar-activity-photo">
                <img src={item.photo} width="100"/> 
                <p>{item.name}</p>
            </div>
        )
    }
  return (
    <>
        <h4>ACTIVITIES</h4>
        <div className='itinerary-activity'>
            {activities?.map(showActivity)}
        </div>
    </>
  )
}

export default Activity