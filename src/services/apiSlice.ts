import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const baseUrl = 'http://localhost:3333';

export const apiSlice = createApi({
  reducerPath: "api",
  tagTypes: ['Foods'],
  endpoints: () => ({}),
  baseQuery: fetchBaseQuery({
    baseUrl,
  }),
});
