import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'


export const myTineraryAPI = createApi({
    reducerPath: "myTineraryAPI",

    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:4000/"

    }),
    endpoints: (builder) => ({
        getAllUsers: builder.query({
            query:(id) => `/itineraries/query?user=${id}`
        })
    })
})

export default myTineraryAPI
export const {useGetAllUsersQuery} = myTineraryAPI