import { createContext, useState, useEffect } from 'react'
import { getAllItems, getSingleItem } from '~/services/itemServices' // Resultado de la consulta al endpoint de items

// 1. Crear el contexto
const ProductsContext = createContext()

// 2. Crear el Proveedor del contexto (privider)
function ProductsProvider ({ children }) {
  const [itemsData, setItemsData] = useState(null)
  const [itemSearched, setItemSearched] = useState(null)
  const [loading, setLoadign] = useState(true)

  useEffect(() => {
    async function fetchItemsData () {
      try {
        const response = await getAllItems()
        if (response.status === 200) {
          setItemsData(response.data)
          setLoadign(false)
        }
      } catch (error) {
        console.log('Fail to load items: ', error.message)
      }
    }
    fetchItemsData()
  }, [])

  async function fetchOneItem (id) {
    try {
      const response = await getSingleItem(id)
      if (response.status === 200) {
        setItemSearched(response.data)
      }
    } catch (error) {
      console.log('Fail to load item: ', error.message)
    }
  }

  const values = {
    itemsData,
    setItemsData,
    itemSearched,
    loading,
    fetchOneItem
  }

  return (
    <ProductsContext.Provider value={values}>
      {children}
    </ProductsContext.Provider>
  )
}

export { ProductsContext, ProductsProvider }
