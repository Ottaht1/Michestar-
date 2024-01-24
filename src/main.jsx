import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import config from './utils/config.js';
import CardsPage from './pages/CardsPage.jsx';
import ProductPage from './pages/ProductPage.jsx';
import PricingPage from './pages/PricingPage.jsx';

const { routes } = config

const router = createBrowserRouter([
  {
    path: routes.home,
    element: <App />,
  },
  {
    path: routes.products,
    element: <ProductPage />,
  },
  {
    path: routes.cards,
    element: <CardsPage />,
  },
  {
    path: routes.pricing,
    element: <PricingPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
