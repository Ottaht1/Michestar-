import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import config from "./utils/config.js";
import AboutUsPage from "./pages/AboutUs.jsx";
import ContactUsPage from "./pages/ContactUs.jsx";
import Layout from "./App.jsx";
import LandingPage from "./pages/LandingPage.jsx";
import ServicesOne from "./pages/Services/ServicesOne.jsx";
import ServicesTwo from "./pages/Services/ServicesTwo.jsx";

const { routes } = config;

const router = createBrowserRouter([
  {
    path: routes.home,
    element: <Layout />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },

      {
        path: routes.about,
        element: <AboutUsPage />,
      },
      {
        path: "services/services1",
        element: <ServicesOne />,
      },
      {
        path: "services/services2",
        element: <ServicesTwo />,
      },
      {
        path: routes.contact,
        element: <ContactUsPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
