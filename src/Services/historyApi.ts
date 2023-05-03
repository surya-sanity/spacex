import { createApi } from '@reduxjs/toolkit/query/react';
import { History } from "../Models/History";
import { baseQuery } from "./baseQuery";

export const historyApi = createApi({
  reducerPath: 'historyApi',
  tagTypes: ['History'],
  baseQuery: baseQuery,
  endpoints: (builder) => ({
    getHistories: builder.query<History[], void>({
      query: () => "history",
      providesTags: ["History"],
    })
  }),
})

export const { useGetHistoriesQuery } = historyApi;
