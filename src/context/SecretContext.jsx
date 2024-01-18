import { createContext, useState, useEffect } from 'react'

// 1. Crear el contexto
const SecretContext = createContext()

// 2. Crear el Proveedor del contexto (privider)
function SecretProvider ({ children }) {
  const [page, setPage] = useState('')

  function handleClickChange (e) {
    setPage(e.target.id)
  }

  useEffect(() => {
    console.log(page)
  }, [page])

  const values = {
    page,
    setPage,
    handleClickChange
  }

  return (
    <SecretContext.Provider value={values}>
      {children}
    </SecretContext.Provider>
  )
}

export { SecretContext, SecretProvider }
