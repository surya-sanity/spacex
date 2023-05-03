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
    getLaunchById: builder.query<Launch, any>({
      query: (id: string) => `launches/${id}`,
      providesTags: ["Launch"],
    })
  }),
})

export const { useGetLaunchesQuery, useGetLaunchByIdQuery } = launchesApi;