import React from 'react'
import { useGetActivityQuery } from '../features/activities.API'

function Activity(data) {

    const { data: activity } = useGetActivityQuery(data.data)
    let activities = activity?.response

    const showActivity = (item) => {
        return (
            <div className='itinerary-activity-photo' key={item._id}>
                <img src={item.photo} width="100" />
                <p>{item.name}</p>
            </div>
        )
    }
    return (
        <>
        <h2>Activities</h2>        
        <div className="itinerary-activity" >
            {activities?.map(showActivity)}
        </div>
        </>
    )
}

export default Activity