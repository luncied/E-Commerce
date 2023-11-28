import { useState, useEffect } from 'react'
import { getAllItems } from '~/services/itemServices' // Resultado de la consulta al endpoint de items
import ItemCard from '~/components/ItemCard'

function Home () {
  const [itemsData, setItemsData] = useState(null)
  const [loading, setLoadign] = useState(true)

  useEffect(() => {
    async function fetchItemData () {
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
    fetchItemData()
  }, [])

  return (
    <>
      <div className='d-flex flex-row flex-wrap justify-content-center'>
        {
          loading
            ? <h1>Cargando...</h1>
            : <ItemCard itemsData={itemsData} />
        }
      </div>

    </>
  )
}

export default Home
