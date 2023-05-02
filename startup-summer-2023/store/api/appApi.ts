import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { HYDRATE } from "next-redux-wrapper";
import { Industry, Params, ResponseData, Vacancy } from "../types";

export const appApi = createApi({
  reducerPath: "appApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://startup-summer-2023-proxy.onrender.com/2.0",
  }),
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath];
    }
  },
  endpoints: (builder) => ({
    getVacancies: builder.query<ResponseData, Params>({
      query: ({ page, vacancy, branch, minSalary, maxSalary }) => ({
        url: `/vacancies/?page=${page}&keyword=${vacancy}&catalogues=${branch}&payment_from=${minSalary}&payment_to=${maxSalary}`,
        headers: {
          "x-secret-key": process.env.NEXT_PUBLIC_SECRET_KEY,
          "X-Api-App-Id": process.env.NEXT_PUBLIC_APP_ID,
        },
      }),
    }),
    getIndustries: builder.query<Industry[], void>({
      query: () => ({
        url: `/catalogues/`,
        headers: {
          "x-secret-key": process.env.NEXT_PUBLIC_SECRET_KEY,
          "X-Api-App-Id": process.env.NEXT_PUBLIC_APP_ID,
        },
      }),
    }),
  }),
});

export const {
  useGetVacanciesQuery,
  useGetIndustriesQuery,
  util: { getRunningQueriesThunk },
} = appApi;

export const { getVacancies, getIndustries } = appApi.endpoints;
