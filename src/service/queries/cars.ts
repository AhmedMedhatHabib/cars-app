import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { Car } from '../types';
import config from '../../config';

export const carsApi = createApi({
  reducerPath: 'cars',
  baseQuery: fetchBaseQuery({ baseUrl: config.common.apiUrl }),
  endpoints: builder => ({
    getCars: builder.query<[Car], string>({
      query: () => `/cars`,
    }),
  }),
});

export const { useGetCarsQuery } = carsApi;
