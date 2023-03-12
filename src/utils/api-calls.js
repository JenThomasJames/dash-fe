import axios from "axios";

const ROOT_URL = "https://fakestoreapi.com";
const PRODUCTS = "/products";
// const CART = "/carts";
const USERS = "/users";
const AUTH = "/auth/login";
// const MOCK_RESPONSE = "https://httpbin.org/status/500";

export const createUser = (user) => {
  return axios.post(ROOT_URL + USERS, user);
};

export const authenticateUser = (credentials) => {
  return axios.post(ROOT_URL + AUTH, credentials);
};

export const getAllCategories = () => {
  return axios.get(ROOT_URL + PRODUCTS + "/categories");
};

export const getAllProducts = () => {
  return axios.get(ROOT_URL + PRODUCTS);
};
