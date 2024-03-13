import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import config from "./utils/config.js";
import ServicesPage from "./pages/Services.jsx";
import AboutUsPage from "./pages/AboutUs.jsx";
import ContactUsPage from "./pages/ContactUs.jsx";

const { routes } = config;

const router = createBrowserRouter([
  {
    path: routes.home,
    element: <App />,
  },
  {
    path: routes.about,
    element: <AboutUsPage />,
  },
  {
    path: routes.services,
    element: <ServicesPage />,
  },
  {
    path: routes.contact,
    element: <ContactUsPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
