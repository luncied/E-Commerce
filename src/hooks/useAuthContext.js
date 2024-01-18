import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'

// 3. Crear un Hook para usar el context

export function useAuthContext () {
  const context = useContext(AuthContext)

  if (context === undefined) {
    throw new Error('AuthContext debe ser usado dentro de AuthProvider')
  }

  return context
}
