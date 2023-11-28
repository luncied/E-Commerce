import axios from 'axios'

const BASE_URL = 'https://ecommercek6.onrender.com'

// El interceptor perimte mandar el token como header de Authorization para que no haya un fallo en la primera petición
axios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token')

    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

function registerUserService (data) {
  return axios.post(`${BASE_URL}/register`, data)
}

function loginUserService (data) {
  return axios.post(`${BASE_URL}/login`, data)
}

function getSingleUserService (id) {
  return axios.get(`${BASE_URL}/users/${id}`, id)
}

export { registerUserService, loginUserService, getSingleUserService }
