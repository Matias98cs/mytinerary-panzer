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
        itinerariesForDetails: builder.mutation({
            query: (cityId) => ({
                url: `/itineraries/query?city=${cityId}`,
                method: 'GET'
            })
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
            query: (payload) => ({
                url: `http://localhost:4000/itineraries/${payload._id}`,
                method: "PATCH",
                body: payload
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
        }),
        likeDislike: builder.mutation({
            query: (id) => ({
                url: `http://localhost:4000/itineraries/likes/${id}`,
                method: 'PATCH',
                headers:  {Authorization: `Bearer ${localStorage.getItem("token")}`}
            })
        })
    })
})

export default itineraryAPI;
export const { 
        useGetAllItinerariesQuery,
        useDeleteItineraryMutation,
        useGetItineraryQuery, 
        useUpdateItineraryMutation, 
        useGetPostNewItineraryMutation,
        useLikeDislikeMutation,
        useItinerariesForDetailsMutation
     } = itineraryAPI

