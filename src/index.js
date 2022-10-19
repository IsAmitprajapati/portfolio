import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, createRoutesFromElements, Navigate, Route, RouterProvider } from "react-router-dom"
import { RotatingLines } from 'react-loader-spinner'
import Project from './pages/Project';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Service from './pages/Service';
import {ThemeMode} from './contexts/ThemeMode';

const loding = async () => {
  const res = await fetch("https://api.sampleapis.com/wines/reds")
  const data = await res.json()
  console.log(data)


}

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // loader: loding,
    children: [
      {
        path: "/",
        element: <Home />,
        // loader: teamLoader,
      },
      {
        path: "project",
        element: <Project />,
        // loader: teamLoader,
      },
      {
        path: "about",
        element: <About />,
        // loader: teamLoader,
      },
      {
        path: "contact",
        element: <Contact />,
        // loader: teamLoader,
      },
      {
        path: "service",
        element: <Service />,
        // loader: teamLoader,
      },
    ],
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeMode>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </ThemeMode>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
