import { useProductsContext } from '../hooks/useProductsContext'
import ItemCard from '~/components/ItemCard'

function Home () {
  const { itemsData, loading } = useProductsContext()
  console.log(itemsData)

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
