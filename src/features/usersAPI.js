import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import apiurl from '../api'

export const usersAPI = createApi({
    reducerPath: "usersAPI",

    baseQuery: fetchBaseQuery({
        baseUrl: apiurl
    }),

    endpoints: (builder) => ({
        getPostNewUser: builder.mutation({
            query(payload){
                return{
                    url: 'auth/signup',
                    method: 'POST',
                    body: payload
                }
            },
            invalidatesTags: ['Post'],
        }),
        getSignInUser: builder.mutation({
            query(payload){
                return{
                    url: 'auth/signin',
                    method: 'POST',
                    body: payload
                }
            },
            invalidatesTags: ['Post'],
        }),
        getSignOutUser: builder.mutation({
            query(payload){
                return{
                    url: 'auth/signout',
                    method: 'POST',
                    body: payload
                }
            },
            invalidatesTags: ['Post'],
        }),
        signInToken: builder.mutation({
            query: (token) => ({
                url: 'auth/token',
                method: 'GET',
                headers: {Authorization: 'Bearer ' + token}
            })
        })
    })
})

export default usersAPI;
export const {useSignInTokenMutation, useGetPostNewUserMutation, useGetSignInUserMutation, useGetSignOutUserMutation} = usersAPI;