import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import apiurl from "../api";
export const itineraryAPI = createApi({
  reducerPath: "itineraryAPI",

  baseQuery: fetchBaseQuery({
    baseUrl: apiurl
  }),
  endpoints: (builder) => ({
    getAllItineraries: builder.query({
      query: (cityId) => `/itineraries/query?city=${cityId}`,
    }),
    itinerariesForDetails: builder.mutation({
      query: (cityId) => ({
        url: `/itineraries/query?city=${cityId}`,
        method: "GET",
      }),
    }),
    deleteItinerary: builder.mutation({
      query: (idItinerary) => ({
        url: "/itineraries/" + idItinerary,
        method: "DELETE",
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      }),
    }),
    getItinerary: builder.query({
      query: (id) => `/itineraries/finditinerary/${id} `,
    }),
    updateItinerary: builder.mutation({
      query: ({id, ...payload}) => ({
        url: `/itineraries/${id}`,
        method: "PATCH",
        body: payload,
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      }),
    }),
    getPostNewItinerary: builder.mutation({
      query(payload) {
        return {
          url: "/itineraries",
          method: "POST",
          body: payload,
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        };
      },
    }),
    likeDislike: builder.mutation({
      query: (id) => ({
        url: `/itineraries/likes/${id}`,
        method: "PATCH",
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      }),
    }),
  }),
});

export default itineraryAPI;
export const {
  useGetAllItinerariesQuery,
  useDeleteItineraryMutation,
  useGetItineraryQuery,
  useUpdateItineraryMutation,
  useGetPostNewItineraryMutation,
  useLikeDislikeMutation,
  useItinerariesForDetailsMutation,
} = itineraryAPI;
