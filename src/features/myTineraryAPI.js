import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import apiurl from '../api'

export const myTineraryAPI = createApi({
    reducerPath: "myTineraryAPI",

    baseQuery: fetchBaseQuery({
        baseUrl: apiurl
    }),
    endpoints: (builder) => ({
        getAllItineraries: builder.query({
            query:(id) => `/itineraries/query?user=${id}`
        }),
        itinerariesAll: builder.mutation({
            query: (id) => ({
                url: `/itineraries/query?user=${id}`,
                method: 'GET'
            })
        })
    })
})

export default myTineraryAPI
export const {useGetAllItinerariesQuery, useItinerariesAllMutation} = myTineraryAPI