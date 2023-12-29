import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useAuthContext } from '~/hooks/useAuthContext'
import { useProductsContext } from '~/hooks/useProductsContext'
import { Cart3 } from 'react-bootstrap-icons'
import CartOff from '~/components/CartOff'
import './header.scss'

function Header () {
  const { isAuth, logout } = useAuthContext()
  const { itemsData, fetchOneItem } = useProductsContext()

  const [ query, setQuery ] = useState('')

  function handleSearchSubmit (e) {
    e.preventDefault()
    setQuery(e.target.value)
  }

  function linkIsActive (isActive) {
    return isActive ? 'header__item-link header__item-link--is-active nav-link' : 'header__item-link nav-link'
  }

  // continue with this useEffect and
  useEffect(() => {
    itemsData.filter(product => {
      return product.product_name.toLowerCase().includes(query.toLowerCase())
    }).map(product => {
      fetchOneItem(product.id)
      return true
    })
  }, [query])

  return (
    <>
      <nav className='header navbar navbar-expand-lg fixed-top'>
        <div className='container'>{}
          <NavLink to='' className='header__logo'>Logo</NavLink>
          <div className='d-flex flex-grow-1justify-content-end'>
            <div className='order-lg-last tw-order-last '>
              <NavLink to='#cartOffcanvas' data-bs-toggle='offcanvas' role='button' target='#cartOffcanvas' aria-controls='cartOffcanvas'>
                <Cart3 className='mx-3 tw-rounded-lg' size={33} color='indigo' iconName='cart' />
              </NavLink>
            </div>
            <button className='navbar-toggler mx-3' type='button' data-bs-toggle='collapse' data-bs-target='#navbarNav' aria-controls='navbarNav'>
              <span className='navbar-toggler-icon' data-bs-target='#navbarNav' />
            </button>
            <div className='justify-content-end collapse navbar-collapse' id='navbarNav' aria-labelledby='navbarNav' aria-hidden='true'>
              <form className='d-flex' role='search' onSubmit={handleSearchSubmit}>
                <input className='form-control me-2' type='search' placeholder='Search' aria-label='Search' />
                <button className='btn btn-outline-dark' type='submit'>Search</button>
              </form>
              <ul className='header__nav-list navbar-nav'>
                <li className='header__list-item nav-item'>
                  <NavLink to='/' className={({ isActive }) => linkIsActive(isActive)}>Home</NavLink>
                </li>
                <li className='header__list-item nav-item'>
                  <NavLink to='/dashboard' className={({ isActive }) => linkIsActive(isActive)}>Dashboard</NavLink>
                </li>
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
        </div>
      </nav>
      <CartOff>
        <NavLink to='/cart' className=''>Cart</NavLink>
      </CartOff>
    </>
  )
}

export default Header
