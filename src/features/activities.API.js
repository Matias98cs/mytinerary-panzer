import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const actitiesAPI = createApi({
    reducerPath: "actitiesAPI",

    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:4000/"
    }),
    endpoints: (builder) => ({
        getActivity: builder.query({
            query: (itineraryId) => `/activities/query?itinerary=${itineraryId}`
        }),

        updateActivity: builder.mutation({
            query: (playload) => ({
                url: `http://localhost:4000/activities/update-activity/${playload._id}`,
                method: "PATCH",
                body: playload

        createActivity: builder.mutation({
            query: (payload) => ({
                url: '/activities',
                method: 'POST',
                body: payload

            })
        })
    })

})

export default actitiesAPI
export const { useGetActivityQuery, useUpdateActivityMutation, useCreateActivityMutation } = actitiesAPI

