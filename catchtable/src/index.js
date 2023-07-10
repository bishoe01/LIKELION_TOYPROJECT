import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Error from './pages/Error';
import Home from './pages/Home';
import Filter from './pages/Filter';
import Login from './pages/Login';
import HotPlace from './pages/HotPlace';
import MyPage from './pages/MyPage';
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      { index: true, path: '/', element: <Home /> },
      { path: '/table', element: <h1>product</h1> },
      { path: '/filter', element: <Filter /> },
      { path: '/login', element: <Login /> },
      { path: '/hotplace', element: <HotPlace /> },
      { path: '/signup', element: <MyPage /> },
    ]
  }
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);
reportWebVitals();
