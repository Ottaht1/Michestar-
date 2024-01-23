import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import config from './utils/config.js';
import DownloadPage from './pages/DownloadPage.jsx';
import CardsPage from './pages/CardsPage.jsx';

const { routes } = config

const router = createBrowserRouter([
  {
    path: routes.home,
    element: <App />,
  },
  {
    path: routes.download,
    element: <DownloadPage />,
  },
  {
    path: routes.cards,
    element: <CardsPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
