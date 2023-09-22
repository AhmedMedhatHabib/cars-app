import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { Car } from '../types'
import config from '../../config'

export const carsApi = createApi({
  reducerPath: 'cars',
  baseQuery: fetchBaseQuery({ baseUrl: config.common.apiUrl }),
  endpoints: (builder) => ({
    getCars: builder.query<[Car], null>({
      query: () => `/cars`,
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetCarsQuery } = carsApi