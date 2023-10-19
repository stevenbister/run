import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RouteError from './RouteError';
import Index from './routes/_index';
import Root from './routes/root';
import Workouts, { loader as workoutLoader } from './routes/workouts';
import './styles/main.css';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <RouteError />,
        children: [
            {
                path: '/',
                element: <Index />,
            },
            {
                path: 'workouts/:id',
                element: <Workouts />,
                loader: workoutLoader,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
