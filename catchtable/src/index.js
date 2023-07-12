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
import Reserve from './pages/Reserve';
import Signup from './pages/Signup';
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
      { path: '/mypage', element: <MyPage /> },
      { path: '/reserve/:id', element: <Reserve /> },
      { path: '/signUp', element: <Signup /> }
    ]
  }
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);
reportWebVitals();
