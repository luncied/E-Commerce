import { NavLink } from 'react-router-dom'
import { Cart3 } from 'react-bootstrap-icons'
import NavBar from '../NavBar'
import Cart from '../Cart'

function Header () {
  return (
    <>
      <nav className='header navbar navbar-expand-lg fixed-top tw-sticky'>
        <div className='container'>{}
          <NavLink to='' className='header__logo'>Logo</NavLink>
          <div className='d-flex flex-grow-1justify-content-end'>
            <div className='order-lg-last tw-order-last '>
              <NavLink to='#cartOffcanvas' data-bs-toggle='offcanvas' role='button' target='#cartOffcanvas' aria-controls='cartOffcanvas'>
                <Cart3 className='mx-3 tw-rounded-lg' size={33} color='indigo' iconName='cart' />
              </NavLink>
            </div>
            <button className='navbar-toggler mx-3' type='button' data-bs-toggle='offcanvas' data-bs-target='#navbarNav' aria-controls='navbarNav'>
              <span className='navbar-toggler-icon' data-bs-target='#navbarNav' />
            </button>
            <NavBar />
          </div>
        </div>
      </nav>
      <Cart>
        <NavLink to='/cart' className=''>Cart</NavLink>
      </Cart>
    </>
  )
}

export default Header
