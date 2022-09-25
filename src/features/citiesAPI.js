import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const citiesAPI = createApi({
    reducerPath: "citiesAPI",

    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:4000/"

    }),
    endpoints: (builder) => ({
        getAllcities: builder.query({
            query: () => '/cities'
        }),
        getCityName: builder.query({
            query: (city) => `cities?city=${city}`
        }),
        getCityById: builder.query({
            query: (id) => `/cities/${id}`
        }),
        getCityForId: builder.mutation({
            query: (id) => ({
                url: `/cities/${id}`,
                method: 'GET'
            })
        }),
        getPostNewCity: builder.mutation({
            query(payload){
                return{
                    url: 'cities',
                    method: 'POST',
                    body: payload,
                    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
                }
            },
            invalidatesTags: ['Post'],
        }),
        getUpdateCity: builder.mutation({
            query: ({id, ...post}) => ({
                url: `cities/${id}`,
                method: 'PATCH',
                body: post,
                headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
            })
        })
    })
})


export default citiesAPI;
export const {useGetAllcitiesQuery, useGetCityNameQuery, useGetPostNewCityMutation, useGetUpdateCityMutation, useGetCityByIdQuery, useGetCityForIdMutation} = citiesAPI;