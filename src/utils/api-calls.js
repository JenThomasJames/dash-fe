import axios from "axios";

const ROOT_URL = "https://fakestoreapi.com";
const PRODUCTS = "/products";
const CART = "/carts";
const USERS = "/users";
const AUTH = "/auth/login";

const createUser = (user) => {
  axios.post(ROOT_URL + USERS, user);
};
