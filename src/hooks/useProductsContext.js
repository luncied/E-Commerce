import { useContext } from 'react'
import { ProductsContext } from '../context/ProductsContext'

// 3. Crear un Hook para usar el context

export function useProductsContext () {
  const context = useContext(ProductsContext)

  if (context === undefined) {
    throw new Error('ProductsContext debe ser usado dentro de ProductsProvider')
  }
  return context
}
