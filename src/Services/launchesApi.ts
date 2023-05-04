import { createApi } from '@reduxjs/toolkit/query/react';
import { Launch } from './../Models/Launch';
import { baseQuery } from "./baseQuery";

export const launchesApi = createApi({
  reducerPath: 'launchesApi',
  tagTypes: ['Launch'],
  baseQuery: baseQuery,
  endpoints: (builder) => ({
    getLaunches: builder.query<Launch[], void>({
      query: () => "launches",
      providesTags: ["Launch"],
    }),
    getLaunchById: builder.query<Launch, string>({
      query: (id) => `launches/${id}`,
      providesTags: ["Launch"],
    }),
    getLatestLaunches: builder.query<Launch[], void>({
      query: () => `launches/latest`,
      providesTags: ["Launch"],
    }),
  }),
})

export const { useGetLaunchesQuery, useGetLaunchByIdQuery, useGetLatestLaunchesQuery } = launchesApi;