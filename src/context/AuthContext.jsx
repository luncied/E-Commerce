import { createContext, useState, useEffect } from 'react'
import { jwtDecode } from 'jwt-decode'

// 1. Crear el contexto
const AuthContext = createContext()

// 2. Crear el Proveedor del contexto (privider)
function AuthProvider ({ children }) {
  const [isAuth, setIsAuth] = useState(false)
  const [userPayload, setUserPayload] = useState(null)

  function login (token) {
    localStorage.setItem('token', token)
    const decodedPayload = jwtDecode(token)
    setUserPayload(decodedPayload)
    setIsAuth(true)
  }

  function logout () {
    localStorage.removeItem('token')
    setUserPayload(null)
    setIsAuth(false)
  }

  // Si hay un token en LS establesco los estados del signin
  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      const decodedPayload = jwtDecode(token)
      setUserPayload(decodedPayload)
      setIsAuth(true)
    }
  }, [])

  const values = {
    isAuth,
    userPayload,
    login,
    logout
  }

  return (
    <AuthContext.Provider value={values}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthProvider, AuthContext }
