import axios from 'axios';

const apiBaseUrl = import.meta.env.VITE_API_URL || '/api';

const api = axios.create({
  baseURL: apiBaseUrl,
  headers: { 'Content-Type': 'application/json' },
});

export const getBlogPosts = () => api.get('/blog');
export const getBlogPost = (slug) => api.get(`/blog/${slug}`);
export const getProjects = () => api.get('/projects');
export const getDonationStats = () => api.get('/donations/stats');
export const submitDonation = (data) => api.post('/donations', data);

export default api;
