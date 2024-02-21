import { createContext, useState, useEffect } from 'react'
import { getAllItems, getSingleItem } from '~/services/itemServices' // Resultado de la consulta al endpoint de items

// 1. Crear el contexto
const ProductsContext = createContext()

// 2. Crear el Proveedor del contexto (privider)
function ProductsProvider ({ children }) {
  const [firstResponse, setfirstResponse] = useState(null)
  const [itemsData, setItemsData] = useState([])
  const [idSearched, setIdSearched] = useState({})
  const [loading, setLoadign] = useState(true)

  useEffect(() => {
    firstFetch()
  }, [])

  useEffect(() => {}, [
    firstResponse,
    itemsData,
    idSearched
  ])

  async function firstFetch () {
    try {
      const response = await getAllItems()
      if (response.status === 200) {
        setfirstResponse(response.data)
        setItemsData(response.data)
        setLoadign(false)
      }
    } catch (error) {
      console.log('Fail to load items: ', error.message)
    }
  }

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

  async function fetchOneItem (id) {
    try {
      const response = await getSingleItem(id)
      if (response.status === 200) {
        setIdSearched(response.data)
      }
    } catch (error) {
      console.log('Fail to load item: ', error.message)
    }
  }

  const values = {
    firstResponse,
    setfirstResponse,
    itemsData,
    setItemsData,
    idSearched,
    loading,
    firstFetch,
    fetchItemsData,
    fetchOneItem
  }

  return (
    <ProductsContext.Provider value={values}>
      {children}
    </ProductsContext.Provider>
  )
}

export { ProductsContext, ProductsProvider }
