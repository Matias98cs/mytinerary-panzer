import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const itineraryAPI = createApi({
  reducerPath: "itineraryAPI",

  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4000/",
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
      query: (id) => `http://localhost:4000/itineraries/finditinerary/${id} `,
    }),
    updateItinerary: builder.mutation({
      query: ({id, ...payload}) => ({
        url: `http://localhost:4000/itineraries/${id}`,
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
        url: `http://localhost:4000/itineraries/likes/${id}`,
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
