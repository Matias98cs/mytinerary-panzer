import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const itineraryAPI = createApi({
    reducerPath: "itineraryAPI",

    baseQuery: fetchBaseQuery({
        baseUrl:"http://localhost:4000/"
    }),
    endpoints: (builder) => ({
        getAllItineraries: builder.query({
            query: (cityId) => `/itineraries/query?city=${cityId}`
        })
    })
})

export default itineraryAPI;
export const {useGetAllItinerariesQuery} = itineraryAPI