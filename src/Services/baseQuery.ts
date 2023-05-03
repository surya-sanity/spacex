import { fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Config } from '../Config';

//basequery for all api's, we can intercept this or make customized headers from here.
export const baseQuery = fetchBaseQuery({
  baseUrl: Config.API_URL,
  prepareHeaders: (headers) => {
    return headers;
  },
})
