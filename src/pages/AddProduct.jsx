import useForm from '../hooks/useForm'

function AddProduct () {
  // Crear un container con el borde unicamente por debajo
  const datos = {
    product_name: '',
    description: '',
    price: 0,
    category: '',
    brand: ''
  }

  function sendData (data) {
    console.log('Send Data', data)
  }

  const { input, handleInputChange, handleSubmit } = useForm(sendData, datos)

  return (
    <div className='container text-center tw-min-w-full'>
      <div className='container tw-h-20 tw-min-w-full tw-items-center tw-font-bold tw-text-2xl tw-border-solid'>
        Necesito crear un formulario aquí
      </div>
      <form
        className=' tw-border-2'
        onSubmit={handleSubmit}
        style={{ display: 'flex', flexDirection: 'column' }}
      >
        <label htmlFor='product_name'>Nombre del producto</label>
        <input className=' tw-rounded-md tw-border-0 tw-border-e-2 tw-border-b-2' type='text' name='product_name' placeholder='Nombre del producto' id='product_name' value={input.product_name} onChange={handleInputChange} />

        <label htmlFor='description'>Descripción del producto</label>
        <input className=' tw-rounded-md tw-border-0 tw-border-e-2 tw-border-b-2' type='text' name='description' placeholder='Descripción' id='description' value={input.description} onChange={handleInputChange} />

        <label htmlFor='price'>Precio del producto</label>
        <input className=' tw-rounded-md tw-border-0 tw-border-e-2 tw-border-b-2' type='number' name='price' placeholder='Precio' id='price' value={input.price} onChange={handleInputChange} />

        <label htmlFor='category'>Categoría del producto</label>
        <input className=' tw-rounded-md tw-border-0 tw-border-e-2 tw-border-b-2' type='text' name='category' placeholder='Categoría' id='category' value={input.category} onChange={handleInputChange} />

        {/* <label htmlFor='genero'>Genero</label>
        <select name='genero' id='genero' value={input.genero} onChange={handleInputChange}>
          <option value=''>Elige un genero</option>
          <option value='M'>Masculino</option>
          <option value='F'>Femenino</option>
          <option value='O'>Otro</option>
        </select> */}
        <label htmlFor='brand'>Marca</label>
        <input className=' tw-rounded-md tw-border-0 tw-border-e-2 tw-border-b-2' type='text' name='brand' placeholder='Marca' id='brand' value={input.brand} onChange={handleInputChange} />

        <button type='submit'>
          Agregar producto
        </button>
      </form>
    </div>
  )
}

export default AddProduct
