import useForm from '../hooks/useForm'
import { useEffect, useState } from 'react'
import Status from './Status'
import Datos from '~/helpers/CrudDatosClass.js'

function AddProduct () {
  // Crear un container con el borde unicamente por debajo
  const [redirect, setRedirect] = useState(false)

  const datos2 = new Datos()

  function sendData (data) {
    console.log(data)
    setRedirect(true)
    datos2.clearData()
    setInput(datos2.getData())
  }

  useEffect(() => {}, [redirect])

  const { input, setInput, handleInputChange, handleSubmit } = useForm(sendData, datos2.getData())

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
        </>
      }
    </div>
  )
}

export default AddProduct
