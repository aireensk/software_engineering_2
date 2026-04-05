import axios from "axios";

const API = axios.create({
  baseURL: "https://cuddly-tribble-5grx7w7vxrq9375r4-8000.app.github.dev/api",
});

// Attach JWT automatically
API.interceptors.request.use((config) => {
  const token = localStorage.getItem("access_token");
  if (token) {
    config.headers.Authorization = `Bearer ${JSON.parse(token)}`;
  }
  return config;
});

// AUTH
export const loginUser = (username, password) =>
  API.post("/auth/login/", { username, password });

export const registerUser = (data) =>
  API.post("/auth/register/", data);

export const getProfile = () =>
  API.get("/auth/profile/");

export const updateProfile = (data) =>
  API.patch("/auth/profile/", data);

// TODOS
export const getTodos = () =>
  API.get("/todos/");

export const createTodo = (name) =>
  API.post("/todos/", { name });

export const updateTodo = (id, data) =>
  API.patch(`/todos/${id}/`, data);

export const deleteTodo = (id) =>
  API.delete(`/todos/${id}/`);