// lib/axios.js
import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'https://fakestoreapi.com/',
})

// Server-side interceptor example
axiosInstance.interceptors.request.use((config) => {
  console.log('[SERVER] Request:', config.url)
  return config
})

export default axiosInstance
