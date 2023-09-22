import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { User } from '../types';
import config from '../../config';

export const userApi = createApi({
  reducerPath: 'users',
  baseQuery: fetchBaseQuery({ baseUrl: config.common.apiUrl }),
  endpoints: builder => ({
    getUserById: builder.query<User, number>({
      query: id => `/users/${id}`,
    }),
  }),
});

export const { useGetUserByIdQuery } = userApi;
