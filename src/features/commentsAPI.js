import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const commenstAPI = createApi({
    reducerPath: "commenstAPI",

    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:4000/"
    }),
    endpoints: (builder) => ({
        getComments: builder.query({
            query: (itineraryId) => `/comments/query?itinerary=${itineraryId}`
        })
    })
})

export default commenstAPI
export const {useGetCommentsQuery} = commenstAPI