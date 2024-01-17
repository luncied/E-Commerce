import { useAuthContext } from '~/hooks/useAuthContext'

function Secret () {
  const { userPayload } = useAuthContext()

  return (
    <div className='tw-pt-20'>
      {
      userPayload?.role === 'ADMIN'
        ? <h2>Hola ADMIN</h2>
        : <h2>Hola Customer</h2>
      }

      <div className="container-fluid">
        <div className="row">
          <div className="d-flex flex-column justify-content-between col-auto bg-dark min-vh-100">

          </div>
        </div>
      </div>
    </div>
  )
}

export default Secret
