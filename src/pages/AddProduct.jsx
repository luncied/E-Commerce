import useForm from '../hooks/useForm'
import { useEffect, useState } from 'react'
import Status from './Status'

function AddProduct () {
  // Crear un container con el borde unicamente por debajo
  const [redirect, setRedirect] = useState(false)

  const datos = {
    product_name: '',
    description: '',
    price: 0,
    category: '',
    brand: ''
  }

  function sendData () {
    setRedirect(true)
  }

  useEffect(() => {}, [redirect])

  const { input, setInput, handleInputChange, handleSubmit } = useForm(sendData, datos)

  useEffect(() => {
    if (redirect) {
      setInput({ ...input, [input.product_name]: '' })
      setInput({ ...input, [input.description]: '' })
      setInput({ ...input, [input.price]: 0 })
      setInput({ ...input, [input.category]: '' })
      setInput({ ...input, [input.brand]: '' })
    }
  }, [redirect])

  return (
    <div className='container text-center tw-min-w-full'>
      {
      redirect
        ? <Status
            setRedirect={setRedirect}
            btnText='Crear otro producto'
          >Producto agregado correctamente</Status>
        : <>
          <div className='container tw-mt-14 tw-min-w-full tw-font-bold tw-text-4xl tw-text-center'>
            Crea un nuevo artículo
          </div>
          <form
            className='tw-my-10 tw-self-center tw-justify-self-center'
            onSubmit={handleSubmit}
            style={{ display: 'flex', flexDirection: 'column' }}
          >
            <div className='row py-3'>
              <label className='col-4 text-end tw-font-bold tw-text-lg' htmlFor='product_name'>Nombre del producto</label>
              <input className='col-8 tw-rounded-md tw-border-0 tw-border-e-2 tw-border-b-2' type='text' name='product_name' placeholder='Nombre del producto' id='product_name' value={redirect ? '' : input.product_name} onChange={handleInputChange} />
            </div>

            <div className='row py-3'>
              <label className='col-4 text-end tw-font-bold tw-text-lg' htmlFor='description'>Descripción del producto</label>
              <input className='col-8 tw-rounded-md tw-border-0 tw-border-e-2 tw-border-b-2' type='text' name='description' placeholder='Descripción' id='description' value={redirect ? '' : input.description} onChange={handleInputChange} />
            </div>

            <div className='row py-3'>
              <label className='col-4 text-end tw-font-bold tw-text-lg' htmlFor='price'>Precio del producto</label>
              <input className='col-8 tw-rounded-md tw-border-0 tw-border-e-2 tw-border-b-2' type='number' name='price' placeholder='Precio' id='price' value={redirect ? '' : input.price} onChange={handleInputChange} min={1} />
            </div>

            <div className='row py-3'>
              <label className='col-4 text-end tw-font-bold tw-text-lg' htmlFor='category'>Categoría del producto</label>
              <input className='col-8 tw-rounded-md tw-border-0 tw-border-e-2 tw-border-b-2' type='text' name='category' placeholder='Categoría' id='category' value={redirect ? '' : input.category} onChange={handleInputChange} />
            </div>

            <div className='row py-3'>
              <label className='col-4 text-end tw-font-bold tw-text-lg' htmlFor='brand'>Marca</label>
              <input className='col-8 tw-rounded-md tw-border-0 tw-border-e-2 tw-border-b-2' type='text' name='brand' placeholder='Marca' id='brand' value={redirect ? '' : input.brand} onChange={handleInputChange} />
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
        </>
      }
    </div>
  )
}

export default AddProduct
