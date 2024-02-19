// Reglas para crear un Hook de React
import { useState } from 'react'

// 1. Es una funcion que utiliza otros hooks de React
// 2. Siempre debe usar la palabra 'use' al inicio del archivo
// 3. Siempre debe usar al menos un hook de React (use State, useEffect, useRef)
// 4. Deben ser Reutilizable, no para casos muy específicos.

function useForm (callback, defaults) {
  const [input, setInput] = useState(defaults)
  // Función que se ejecuta cuando ocurre un cambio en el input
  function handleInputChange (e) {
    const { name, value } = e.target
    setInput({ ...input, [name]: value })
  }

  // Funcion que se ejecuta al enviar el formulario
  function handleSubmit (e) {
    e.preventDefault()
    callback(input)
  }

  return {
    input,
    setInput,
    handleInputChange,
    handleSubmit
  }
}

export default useForm
