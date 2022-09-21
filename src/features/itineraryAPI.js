import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const itineraryAPI = createApi({
    reducerPath: "itineraryAPI",

    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:4000/"
    }),
    endpoints: (builder) => ({
        getAllItineraries: builder.query({
            query: (cityId) => `/itineraries/query?city=${cityId}`
        }),
        deleteItinerary: builder.mutation({
            query: (idItinerary) => ({
                url: '/itineraries/' + idItinerary,
                method: 'DELETE',
            })
        }),
        getItinerary: builder.query({
            query: (id) => `http://localhost:4000/itineraries/finditinerary/${id} `
        }),
        updateItinerary: builder.mutation({
            query: (playload) => ({
                url: `http://localhost:4000/itineraries/${playload._id}`,
                method: "PATCH",
                body: playload
            })
        }),
        getPostNewItinerary: builder.mutation({
                query(payload) {
                    return {
                        url: '/itineraries',
                        method: 'POST',
                        body: payload
                    }
                }
            })
        })

    })

export default itineraryAPI;
export const { useGetAllItinerariesQuery, useDeleteItineraryMutation, useGetItineraryQuery, useUpdateItineraryMutation, useGetPostNewItineraryMutation } = itineraryAPI

