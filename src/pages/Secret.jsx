import { useAuthContext } from '~/hooks/useAuthContext'
import { useSecretContext } from '../hooks/useSecretContext'
import { AddProduct, DeleteProduct, EditProduct } from '~/pages'
import SideBar from '../components/SideBar/SideBar'
import '~/styles/Secret.scss'

function Secret () {
  const { page } = useSecretContext()
  const { userPayload } = useAuthContext()

  return (
    <>
      <div className='container-fluid'>
        <div className='row'>
          {
          userPayload?.role === 'ADMIN'
            ? <SideBar />
            : <h2>Hola Customer</h2>
          }
          <div className='container flex-column text-center col-auto xs:tw-min-w-[70%] sm:tw-min-w-[60%] lg:tw-min-w-[75%] tw-pt-16'>
            {
            page === 'add'
              ? <AddProduct />
              : page === 'edit'
                ? <EditProduct />
                : <DeleteProduct />
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default Secret
