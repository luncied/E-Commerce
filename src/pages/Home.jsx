import { useProductsContext } from '../hooks/useProductsContext'
import ItemCard from '~/components/ItemCard'

function Home () {
  const { itemsData, loading } = useProductsContext()

  return (
    <>
      <div className='d-flex flex-row flex-wrap justify-content-center tw-pt-20'>
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
