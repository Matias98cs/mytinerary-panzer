import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const itineraryAPI = createApi({
    reducerPath: "itineraryAPI",

    baseQuery: fetchBaseQuery({
        baseUrl:"http://localhost:4000/"
    }),
    endpoints: (builder) => ({
        getAllItineraries: builder.query({
            query: (cityId) => `/itineraries/query?city=${cityId}`
        }),
        getPostNewItinerary: builder.mutation({
            query(payload){
                return{
                    url: '/itineraries',
                    method: 'POST',
                    body: payload
                }
            }
        })
    })
})

export default itineraryAPI;
export const {useGetAllItinerariesQuery, useGetPostNewItineraryMutation} = itineraryAPI