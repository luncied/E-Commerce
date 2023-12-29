import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Popover from 'react-bootstrap/Popover'

function ItemCard ({ itemsData }) {
  return (
    <>
      {
        itemsData.map((product) => (
          <div className='card tw-m-2 tw-p-2' style={{ width: '18rem' }} key={product.id}>
            <div className=' tw-h-96'>
              <img
                className='card-img-top'
                style={{ maxHeight: '300px' }}
                // src={product.image}
                alt={`img-of-${product.product_name}`}
              />
            </div>
            <div className='card-body'>
              <h5 className='card-title'>{product.product_name}</h5>
              <OverlayTrigger
                trigger={['hover', 'focus']}
                overlay={(
                  <Popover className='descrition-popover' id={`popover-${product.id}`}>
                    <div className='tw-py-2 tw-px-4 tw-text-center tw-text-base'>
                      {product.description}
                    </div>
                  </Popover>
                  )}
              >
                <p className='card-text tw-pt-5 tw-text-end' type='button'>Show description...</p>
              </OverlayTrigger>
              {/* Aqui no se implementa el botón, pero basta con sustituir "a" por Link de react-router-dom y la ruta del enlace indicar el componente que mostrará la información de un solo producto, seguido del id del producto */}
            </div>
            <a href='#' className='btn btn-primary'>
              Comprar
            </a>
          </div>
        ))
      }
    </>
  )
}

export default ItemCard
