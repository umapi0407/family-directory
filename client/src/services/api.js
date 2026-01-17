import axios from "axios"

const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000"

const apiClient = axios.create({
  baseURL: API_BASE_URL,
})

// Add token to requests if it exists
apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem("adminToken")
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

// Family Members API
export const memberAPI = {
  getAllMembers: () => apiClient.get("/api/members"),
  getMembersBySurname: (surname) => apiClient.get("/api/members/search", { params: { surname } }),
  createMember: (data) => apiClient.post("/api/members", data),
  updateMember: (id, data) => apiClient.put(`/api/members/${id}`, data),
  deleteMember: (id) => apiClient.delete(`/api/members/${id}`),
}

// Admin API
export const authAPI = {
  login: (username, password) => apiClient.post("/api/auth/login", { username, password }),
  register: (username, password) => apiClient.post("/api/auth/register", { username, password }),
}

export default apiClient
