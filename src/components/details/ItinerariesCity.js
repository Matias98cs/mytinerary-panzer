import React from 'react'

function ItinerariesCity({findItinerary}) {
    console.log(findItinerary)

    const showUser = use => {
        return(
            <>
                <a>{use.name}</a>
                <a>{use.mail}</a>
            </>
        )
    }

    const showItinerary = (itine) => {
        return(
            <div key={itine._id}>
                <p>Name:{itine.name}</p>
                <p>Duration:{itine.duration}</p>
                <p>Price: ${itine.price}</p>
                {showUser(itine.user)}
            </div>
        )
    }
  return (
    <div>
        {findItinerary?.map(showItinerary)}
    </div>
  )
}

export default ItinerariesCity