import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { Provider } from 'react-redux';
import { store } from './service/store/index.ts';
import './localization';
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom';
import { MainRoutes } from './Routes.ts';
import MainLayout from './components/layout/MainLayout.tsx';

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      { path: '*', element: <Navigate to={MainRoutes.dashboard} /> },
      {
        path: MainRoutes.dashboard,
        element: <App />,
      },
      {
        path: MainRoutes.cars,
        element: <App />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Provider>
);
