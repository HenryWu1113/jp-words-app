import axios from 'axios'
import { useUserStore } from '@/stores/user'

export const api = axios.create({
  baseURL: import.meta.env.VITE_API
})

export const apiAuth = axios.create({
  baseURL: import.meta.env.VITE_API
})

apiAuth.interceptors.request.use((config) => {
  const { token } = useUserStore()
  config.headers.Authorization = `Bearer ${token}`
  return config
})
