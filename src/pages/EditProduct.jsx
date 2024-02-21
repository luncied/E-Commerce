import { useEffect, useState } from 'react'
import { useProductsContext } from '~/hooks/useProductsContext'
import Status from './Status'
import SearchBar from '../components/SearchBar/SearchBar'
import SearchResults from '../components/SearchResults/SearchResults'
import Datos from '~/helpers/CrudDatosClass.js'
import useForm from '../hooks/useForm'

function EditProduct () {
  const { firstResponse, fetchOneItem, idSearched } = useProductsContext()

  const [redirect, setRedirect] = useState(false)
  const [searchInput, setSearchInput] = useState('') // Registra lo que hay en el input para buscar en la API
  const [resultId, setResultId] = useState('') // El ID del objeto que hace match con lo buscado en searchBar
  const [result, setResult] = useState([]) // El objeto que hace match con lo buscado en el searchBar

  useEffect(() => {
    if (resultId) {
      fetchOneItem(resultId)
      setInput(data)
    }
  }, [result])

  // Este useEffect permite que se actualice en tiempo real el resultId y que haga un set de itemsData para poder cargarl
  useEffect(() => {
    if (resultId) {
      setSearchInput('')
      data.clearData()
      setInput(data)
    }
  }, [resultId])

  useEffect(() => {}, [redirect])

  const data = new Datos(
    idSearched.product_name,
    idSearched.description,
    idSearched.price,
    idSearched.category,
    idSearched.brand
  )

  function sendData (data) {
    setRedirect(true)
    data.clearData()
  }

  const { input, setInput, handleInputChange, handleSubmit } = useForm(sendData, data)

  return (
    <div className='container text-center tw-min-w-full'>
      {
      redirect
        ? <Status
            setRedirect={setRedirect}
            btnText='Editar otro producto'
          >Producto editado correctamente</Status>
        : <>
          <div className='container tw-mt-14 tw-min-w-full tw-font-bold tw-text-4xl tw-text-center'>
            Editar articulo
          </div>
          <SearchBar
            searchInput={searchInput}
            firstResponse={firstResponse}
            setSearchInput={setSearchInput}
            setResult={setResult}
            resultId={resultId}
          />
          <SearchResults
            result={result}
            setResultId={setResultId}
            resultId={resultId}
          />
          {
            resultId && (
              <form
                className='tw-my-10 tw-self-center tw-justify-self-center'
                onSubmit={handleSubmit}
                style={{ display: 'flex', flexDirection: 'column' }}
              >
                <div className='row py-3'>
                  <label className='col-4 text-end tw-font-bold tw-text-lg' htmlFor='productName'>Nombre del producto</label>
                  <input className='col-8 tw-rounded-md tw-border-0 tw-border-e-2 tw-border-b-2' type='text' name='productName' placeholder='Nombre del producto' id='productName' value={input.productName} onChange={handleInputChange} />
                </div>

                <div className='row py-3'>
                  <label className='col-4 text-end tw-font-bold tw-text-lg' htmlFor='description'>Descripción del producto</label>
                  <input className='col-8 tw-rounded-md tw-border-0 tw-border-e-2 tw-border-b-2' type='text' name='description' placeholder='Descripción' id='description' value={input.description} onChange={handleInputChange} />
                </div>

                <div className='row py-3'>
                  <label className='col-4 text-end tw-font-bold tw-text-lg' htmlFor='price'>Precio del producto</label>
                  <input className='col-8 tw-rounded-md tw-border-0 tw-border-e-2 tw-border-b-2' type='number' name='price' placeholder='Precio' id='price' value={input.price} onChange={handleInputChange} min={1} />
                </div>

                <div className='row py-3'>
                  <label className='col-4 text-end tw-font-bold tw-text-lg' htmlFor='category'>Categoría del producto</label>
                  <input className='col-8 tw-rounded-md tw-border-0 tw-border-e-2 tw-border-b-2' type='text' name='category' placeholder='Categoría' id='category' value={input.category} onChange={handleInputChange} />
                </div>

                <div className='row py-3'>
                  <label className='col-4 text-end tw-font-bold tw-text-lg' htmlFor='brand'>Marca</label>
                  <input className='col-8 tw-rounded-md tw-border-0 tw-border-e-2 tw-border-b-2' type='text' name='brand' placeholder='Marca' id='brand' value={input.brand} onChange={handleInputChange} />
                </div>

                {/* <label htmlFor='genero'>Genero</label>
                <select name='genero' id='genero' value={input.genero} onChange={handleInputChange}>
                  <option value=''>Elige un genero</option>
                  <option value='M'>Masculino</option>
                  <option value='F'>Femenino</option>
                  <option value='O'>Otro</option>
                </select> */}

                <button className=' tw-w-52 tw-self-center tw-mx-6 tw-my-5 btn btn-outline-success' type='submit'>
                  Agregar producto
                </button>
              </form>
            )
          }
        </>
      }
    </div>
  )
}

export default EditProduct
