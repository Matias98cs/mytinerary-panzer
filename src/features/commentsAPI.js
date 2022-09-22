import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const commenstAPI = createApi({
    reducerPath: "commenstAPI",

    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:4000/"
    }),
    endpoints: (builder) => ({
        getComments: builder.query({
            query: (itineraryId) => `/comments/query?itinerary=${itineraryId}`
        }),
        createComments: builder.mutation({
            query: (playload) => ({
                url: `http://localhost:4000/comments`,
                method: "POST",
                body: playload,
                headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
            })
        }),
        deletComments: builder.mutation({
            query: (id) => ({
                url:`http://localhost:4000/comments/${id}`,
                method: 'DELETE',
                headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
            })
        }),
        updateComments: builder.mutation({
            query: (playload) => ({
                url:`http://localhost:4000/comments/${playload.id}`,
                method: 'PATCH',
                body: playload,
                headers:{ Authorization: `Bearer ${localStorage.getItem("token")}` }
            })
        })
    })
})

export default commenstAPI
export const { useGetCommentsQuery, useCreateCommentsMutation, useDeletCommentsMutation } = commenstAPI