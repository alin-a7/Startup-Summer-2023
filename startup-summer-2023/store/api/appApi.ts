import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { HYDRATE } from "next-redux-wrapper";


export const appApi = createApi({
  reducerPath: 'appApi',
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000",
  }),
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath];
    }
  },
  endpoints: (builder) => ({
    getAllUser: builder.query({
      query: () => `/user`,
    }),
    getUser: builder.query({
      query: (id) => `/user/${id}`,
    }),
  }),
});

export const {
  util: { getRunningQueriesThunk },
} = appApi;

export const { getAllUser, getUser } = appApi.endpoints;
