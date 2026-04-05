import axios from "axios";

const API_URL = import.meta.env?.VITE_DJANGO_API_URL || "http://127.0.0.1:8000/api";

const api = axios.create({
  baseURL: API_URL,
});

// Attach token
api.interceptors.request.use((config) => {
  const publicEndpoints = ["/auth/register/", "/auth/token/"];

  const isPublic = publicEndpoints.some((endpoint) =>
    config.url.includes(endpoint)
  );

  if (!isPublic) {
    const token = localStorage.getItem("access_token");

    if (token) {
      config.headers.Authorization = `Bearer ${JSON.parse(token)}`;
    }
  }

  return config;
});


// AUTH

export const login = async (username, password) => {
  const response = await api.post("/auth/token/", {
    username,
    password,
  });

  localStorage.setItem("access_token", JSON.stringify(response.data.access));

  return response.data;
};

export const register = async (username, email, password) => {
  const response = await api.post("/auth/register/", {
    username,
    email,
    password,
  });

  return response.data;
};


// TODOS

export const getTodos = async () => {
  const response = await api.get("/todos/");
  return response.data;
};

export const createTodo = async (name) => {
  const response = await api.post("/todos/", { name });
  return response.data;
};

export const deleteTodo = async (id) => {
  await api.delete(`/todos/${id}/`);
};


// PROFILE

export const getProfile = async () => {
  const response = await api.get("/auth/profile/");
  return response.data;
};

export const updateProfile = async (data) => {
  const response = await api.patch("/auth/profile/", data);
  return response.data;
};

export default api;