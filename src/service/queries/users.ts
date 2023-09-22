import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { User } from '../types';
import config from '../../config';
import {
  UserBenefits,
  UserLikes,
  UserRecommendations,
  UserUsage,
} from '../types/user';

export const userApi = createApi({
  reducerPath: 'users',
  baseQuery: fetchBaseQuery({ baseUrl: config.common.apiUrl }),
  endpoints: builder => ({
    getUserById: builder.query<User, number>({
      query: id => `/users/${id}`,
    }),
    getUserUsageByUserId: builder.query<UserUsage, number>({
      query: id => `/users/${id}/usage`,
    }),
    getUserLikesByUserId: builder.query<UserLikes, number>({
      query: id => `/users/${id}/likes`,
    }),
    getUserBenefitsByUserId: builder.query<UserBenefits, number>({
      query: id => `/users/${id}/usage`,
    }),
    getUserRecommendationsByUserId: builder.query<UserRecommendations, number>({
      query: id => `/users/${id}/recommendations`,
    }),
  }),
});

export const {
  useGetUserByIdQuery,
  useGetUserUsageByUserIdQuery,
  useGetUserLikesByUserIdQuery,
  useGetUserBenefitsByUserIdQuery,
  useGetUserRecommendationsByUserIdQuery,
} = userApi;
