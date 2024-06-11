const environment = {};

export const backendUrl = import.meta.env.VITE_API_ENDPOINT;

const routes = {
  home: "/",
  about: "/about",
  services: "/services",
  contact: "/contact",
};

environment.developement = {
  routes,
};

export default environment["developement"];
