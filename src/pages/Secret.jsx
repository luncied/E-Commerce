import { useEffect, useState } from 'react'
import { useAuthContext } from '~/hooks/useAuthContext'
import { useSecretContext } from '../hooks/useSecretContext'
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
          <div className='d-flex felx-column justify-content-between col-auto min-vh-100'>{page}</div>
        </div>
      </div>
    </>
  )
}

export default Secret
