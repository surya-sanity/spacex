import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQuery } from "./baseQuery";
import { Rocket } from '../Models/Rocket';

export const rocketsApi = createApi({
  reducerPath: 'rocketsApi',
  tagTypes: ['Rocket'],
  baseQuery: baseQuery,
  endpoints: (builder) => ({
    getRockets: builder.query<Rocket[], void>({
      query: () => "rockets",
      providesTags: ["Rocket"],
    }),
    getRocketById: builder.query<Rocket, string>({
      query: (id: string) => `rockets/${id}`,
      providesTags: ["Rocket"],
    }),
  }),
})

export const { useGetRocketsQuery, useGetRocketByIdQuery } = rocketsApi;