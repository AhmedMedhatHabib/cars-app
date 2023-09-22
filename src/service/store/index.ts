import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { carsApi } from '../queries/cars';
import { userApi } from '../queries/users';

export const store = configureStore({
  reducer: {
    [carsApi.reducerPath]: carsApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware()
      .concat(carsApi.middleware)
      .concat(userApi.middleware),
});

setupListeners(store.dispatch);
