import React from 'react'
import { useGetActivityQuery } from '../features/activities.API'

function Activity(data) {

    const {data: activity} = useGetActivityQuery(data.data)
    let activities  = activity?.response

    const showActivity = (item) => {
        return(
            <div key={item._id}>
                <img src={item.photo} width="100"/> 
                <p>{item.name}</p>
            </div>
        )
    }
  return (
    <div>
        {activities?.map(showActivity)}
    </div>
  )
}

export default Activity