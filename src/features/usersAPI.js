import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const usersAPI = createApi({
    reducerPath: "usersAPI",

    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:4000/"
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
        })
    })
})

export default usersAPI;
export const {useGetPostNewUserMutation} = usersAPI;