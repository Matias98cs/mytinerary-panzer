import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const citiesAPI = createApi({
    reducerPath: "citiesAPI",

    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:4000/"

    }),
    endpoints: (builder) => ({
        getAllcities: builder.query({
            query: () => '/cities'
        })
    })
})


export default citiesAPI;
export const {useGetAllcitiesQuery} = citiesAPI;