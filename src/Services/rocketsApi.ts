import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQuery } from "./baseQuery";
import { Rocket } from '../Models/Rocket';

export const rocketsApi = createApi({
  reducerPath: 'rocketsApi',
  tagTypes: ['Rocket'],
  baseQuery: baseQuery,
  endpoints: (builder) => ({
    getRocket: builder.query<Rocket[], void>({
      query: () => "rockets",
      providesTags: ["Rocket"],
    }),
    getRocketById: builder.query<Rocket, any>({
      query: (id: string) => `rockets/${id}`,
      providesTags: ["Rocket"],
    }),
  }),
})

export const { useGetRocketQuery, useGetRocketByIdQuery } = rocketsApi;