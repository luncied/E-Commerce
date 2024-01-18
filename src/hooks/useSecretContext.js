import { useContext } from 'react'
import { SecretContext } from '../context/SecretContext'

// 3. Crear un Hook para usar el context

export function useSecretContext () {
  const context = useContext(SecretContext)

  if (context === undefined) {
    throw new Error('SecretContext debe ser usado dentro de SecretProvider')
  }
  return context
}
