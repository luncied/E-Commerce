function Cart ({ children }) {
  return (
    <>
      <div className='offcanvas offcanvas-end offcanvas-light' tabIndex='-1' id='cartOffcanvas' data-bs-hideresize='true'>
        <div className='offcanvas-header'>
          <h5 className='offcanvas-title' id='staticBackdropLabel'>Your Cart</h5>
          <button type='button' className='btn-close' data-bs-dismiss='offcanvas' />
        </div>
        <div className='offcanvas-body'>
          <div>
            Aqui va un map enlistando todos los objetos dentro de un carrito
          </div>
        </div>
        {children}
      </div>
    </>
  )
}

export default Cart
