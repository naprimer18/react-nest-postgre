//Base private and public routes
const BASE_APP_PAGE = "/app";
const BASE_AUTH_PAGE = "/auth";

// Custom routes
const BASE_ABOUT_PAGE = `${BASE_APP_PAGE}/about`;
export const LOGIN_PAGE = `${BASE_AUTH_PAGE}/login`;
export const REGISTRATION_PAGE = `${BASE_AUTH_PAGE}/registration`;

// Auth
const AUTH_ROUTES = {
  LOGIN_PAGE,
  REGISTRATION_PAGE,
};

const BASE_ROUTES = {
  BASE_APP_PAGE,
  BASE_AUTH_PAGE,
};

// Header
const HEADER_ROUTES = {
  BASE_APP_PAGE,
  BASE_ABOUT_PAGE,
};

export default {
  BASE_ROUTES,
  HEADER_ROUTES,
  AUTH_ROUTES,
};
