import axios from 'axios';

// API Configuration
const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

// Create axios instance with default config
const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor to add auth token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor to handle errors
api.interceptors.response.use(
  (response) => {
    // Handle successful responses (including 304 Not Modified)
    return response;
  },
  (error) => {
    if (error.response?.status === 401) {
      // Token expired or invalid, redirect to login
      localStorage.removeItem('token');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

// Auth API calls
export const authAPI = {
  login: (credentials) => api.post('/users/login', credentials),
  register: (userData) => api.post('/users/register', userData),
  getProfile: () => api.get('/users/profile'),
  updateProfile: (userData) => api.put('/users/profile', userData),
};

// Library API calls
export const libraryAPI = {
  getStats: () => api.get('/library/stats'),
  getFeatured: () => api.get('/library/featured'),
  getResources: (params) => api.get('/library/resources', { params }),
  searchResources: (query) => api.get('/library/search', { params: { q: query } }),
};

// Chat API calls
export const chatAPI = {
  sendMessage: (message) => api.post('/chatbot', { message }),
};

// News API calls (if you want to proxy through backend)
export const newsAPI = {
  getNews: (params) => api.get('/news', { params }),
};

export default api;
