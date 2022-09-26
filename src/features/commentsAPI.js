import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import apiurl from '../api'

export const commenstAPI = createApi({
    reducerPath: "commenstAPI",

    baseQuery: fetchBaseQuery({
        baseUrl: apiurl
    }),
    endpoints: (builder) => ({
        getComments: builder.query({
            query: (itineraryId) => `/comments/query?itinerary=${itineraryId}`
        }),
        commentsAll: builder.mutation({
            query: (id) => ({
                url: `/comments/query?itinerary=${id}`,
                method: 'GET'
            })
        }),
        createComments: builder.mutation({
            query: (playload) => ({
                url: `/comments`,
                method: "POST",
                body: playload,
                headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
            })
        }),
        deletComments: builder.mutation({
            query: (id) => ({
                url:`/comments/${id}`,
                method: 'DELETE',
                headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
            })
        }),
        updateComments: builder.mutation({
            query: ({id, ...data}) => ({
                url:`comments/${id}`,
                method: 'PATCH',
                body: data,
                headers:{ Authorization: `Bearer ${localStorage.getItem("token")}` }
            })
        })
    })
})

export default commenstAPI
export const { useCommentsAllMutation ,useUpdateCommentsMutation ,useGetCommentsQuery, useCreateCommentsMutation, useDeletCommentsMutation } = commenstAPI