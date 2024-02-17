import { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useAuthContext } from '~/hooks/useAuthContext'
import { useProductsContext } from '~/hooks/useProductsContext'
import './navBar.scss'

function NavBar () {
  const { isAuth, logout } = useAuthContext()
  const { firstResponse, setItemsData } = useProductsContext()
  const navigate = useNavigate()

  const [query, setQuery] = useState('')

  // Este useEffect permite que se actualice en tiempo real el query y que haga un set de itemsData para poder cargarl
  useEffect(() => {
    if (!query) {
      setItemsData(firstResponse)
      return
    }
    navigate('/')
    filterProductsSearched()
  }, [query])

  function linkIsActive (isActive) {
    return isActive ? 'header__item-link header__item-link--is-active nav-link' : 'header__item-link nav-link'
  }

  function handleSearchSubmit (e) {
    e.preventDefault()
    setQuery(e.target.searchInput.value)
  }

  function filterProductsSearched () {
    setItemsData(firstResponse.filter(product => {
      return product.product_name.toLowerCase().includes(query.toLowerCase())
    }))
  }

  return (
    <>
      <div className='justify-content-end offcanvas offcanvas-top pb-2' id='navbarNav' data-bs-hideresize='true' aria-labelledby='navbarNav' aria-hidden='true'>
        <div className='offcanvas-header header'>
          <h5 className='offcanvas-title' id='staticBackdropLabel'>Menú</h5>
          <button type='button' className='btn-close' data-bs-dismiss='offcanvas' />
        </div>
        <div className='offcanvas-body p-0'>
          <ul className='header__nav-list navbar-nav'>

            <li className='header__list-item nav-item tw-text-left'>
              <NavLink to='/' className={({ isActive }) => linkIsActive(isActive)}>Home</NavLink>
            </li>
            <li className='header__list-item nav-item'>
              <NavLink to='/dashboard' className={({ isActive }) => linkIsActive(isActive)}>Dashboard</NavLink>
            </li>
            <form
              className='d-flex max-lg:tw-py-3 max-lg:tw-px-3 max-lg:tw-w-96'
              role='search'
              onSubmit={handleSearchSubmit}
            >
              <input className='form-control me-2' id='searchInput' name='searchInput' type='search' placeholder='Search' aria-label='Search' />
              <button className='btn btn-outline-dark' type='submit'>Search</button>
            </form>
            {
              isAuth
                ? (
                  <>
                    <li className='header__list-item nav-item'>
                      <NavLink to='/secret' className={({ isActive }) => linkIsActive(isActive)}>Secret</NavLink>
                    </li>
                    <li className='header__list-item nav-item'>
                      <NavLink to='/' className='header__item-link nav-link' onClick={logout}>Logout</NavLink>
                    </li>
                  </>
                  )
                : (
                  <>
                    <li className='header__list-item nav-item'>
                      <NavLink to='/login' className={({ isActive }) => linkIsActive(isActive)}>Login</NavLink>
                    </li>
                    <li className='header__list-item nav-item'>
                      <NavLink to='/signup' className={({ isActive }) => linkIsActive(isActive)}>Signup</NavLink>
                    </li>
                  </>
                  )
            }
          </ul>
        </div>
      </div>
    </>
  )
}

export default NavBar
