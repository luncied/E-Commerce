import axios from 'axios'

const BASE_URL = 'https://ecommercek6.onrender.com'

// https://stackoverflow.com/questions/71989146/axios-instance-not-getting-the-token-from-local-storage-on-first-call-react-js
axios.interceptors.request.use((config) => {
  const token = localStorage.getItem('token')
  if (token) {
    config.headers.Authorization = token ? `Bearer ${token}` : ''
  }
  return config
},
(error) => {
  return Promise.reject(error)
})

function getSingleItem (id) {
  return axios.get(`${BASE_URL}/items/${id}`)
}

function getAllItems () {
  return axios.get(`${BASE_URL}/items`)
}

export {
  getSingleItem,
  getAllItems
}
