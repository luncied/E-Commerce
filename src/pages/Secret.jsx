import { useAuthContext } from '~/hooks/useAuthContext'

function Secret () {
  const { userPayload } = useAuthContext()

  return (
    <>
      {
      userPayload?.role === 'ADMIN'
        ? <h2>Hola ADMIN</h2>
        : <h2>Hola Customer</h2>
      }

      {
        userPayload?.role === 'CUSTOMER' && <h4>Bienvenido CUSTOMER</h4>
      }
      {
        userPayload?.role === 'ADMIN' && <h4>Bienvenido ADMIN</h4>
      }
    </>
  )
}

export default Secret
