import { useAuthContext } from '~/hooks/useAuthContext'
import { NavLink, useNavigate } from 'react-router-dom'
import '~/styles/Secret.scss'

function Secret () {
  const { userPayload } = useAuthContext()

  function linkIsActive (isActive) {
    return isActive ? 'nav-link text-white text-center text-sm-start active-link' : 'nav-link text-white text-center text-sm-start'
  }
  return (
    <div className='tw-max-w-full tw-max-h-full'>
      {
      userPayload?.role === 'ADMIN'
        ? <div className='container-fluid'>
          <div className='row row-auto'>
            <div className='d-flex flex-column justify-content-between col-auto bg-dark min-vh-100'>
              <div className='mt-4'>
                <a className='text-white d-none d-sm-inline text-decoration-none d-flex align-items-center ms-4' role='button'>
                  <span className='fs-5'>Side Menu</span>
                </a>
                <hr className='text-white d-none d-sm-block' />
                <ul className='nav nav-pills flex-column mt-2 mt-sm-0' id='secret-menu'>
                  <li className='nav-item my-sm-1 my-2'>
                    <NavLink to='/secret/add-product' className={({ isActive }) => linkIsActive(isActive)} aria-current='page'>
                      <i className='fa-solid fa-gauge' />
                      <span className='ms-2 d-none d-sm-inline'>Crear producto</span>
                    </NavLink>
                  </li>
                  <li className='nav-item my-sm-1 my-2'>
                    <NavLink to='/secret/edit-product' className={({ isActive }) => linkIsActive(isActive)} aria-current='page'>
                      <i className='fa fa-house' />
                      <span className='ms-2 d-none d-sm-inline'>Editar un producto</span>
                    </NavLink>
                  </li>
                  <li className='nav-item my-sm-1 my-2'>
                    <NavLink to='/secret/delete-product' className={({ isActive }) => linkIsActive(isActive)} aria-current='page'>
                      <i className='fa fa-users' />
                      <span className='ms-2 d-none d-sm-inline'>Eliminar un producto</span>
                    </NavLink>
                  </li>
                  {/* <li className='nav-item my-sm-1 my-2 disabled'>
                    <a href='#sidemenu' data-bs-toggle='collapse' className='nav-link text-white text-center text-sm-start'>
                      <i className='fa fa-table' />
                      <span className='ms-2 d-none d-sm-inline'>Usuarios</span>
                      <i className='fa fa-caret-down ms-1' />
                    </a>
                    <ul className='nav colapse ms-1 flex-column' id='sidemenu' data-bs-parent='#secret-menu'>
                      <li className='nav-item'>
                        <a href='#' className='nav-link text-white d-none d-sm-inline' aria-current='page'>Consultar usuario</a>
                      </li>
                      <li className='nav-item'>
                        <a href='#' className='nav-link text-white d-none d-sm-inline'></a>
                      </li>
                    </ul>
                  </li> */}
                </ul>
              </div>
              <div>
                <div className='dropdown open'>
                  <a
                    className='btn btn-border-none outline-none text-white dropdown-toggle text-center text-sm-start'
                    type='button'
                    id='triggerId'
                    data-bs-toggle='dropdown'
                    aria-haspopup='true'
                    aria-expanded='false'
                  >
                    <i className='fa fa-user' /><span className='ms-1 d-none d-sm-inline'>Luncie</span>
                  </a>
                  <div className='dropdown-menu' aria-labelledby='triggerId'>
                    <a className='dropdown-item' href='#'>Profile</a>
                    <a className='dropdown-item' href='#'>Settings</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
        : <h2>Hola Customer</h2>
      }
    </div>

  )
}

export default Secret
