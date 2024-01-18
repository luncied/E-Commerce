import { Routes, Route, Navigate } from 'react-router-dom'
import { Home, Dashboard, Login, Signup, Secret, Cart, AddProduct, EditProduct, DeleteProduct } from '../pages'
import { useAuthContext } from '../hooks/useAuthContext'

function RoutesIndex () {
  const { isAuth } = useAuthContext()

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route
          path='/dashboard'
          element={
            isAuth
              ? <Dashboard />
              : <Navigate to='/login' replace />
            }
        />
        <Route path='/login' element={<Login />} />
        <Route path='/secret' element={<Secret />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/secret/add-product' element={isAuth ? <AddProduct /> : <Navigate to='/login' replace />} />
        <Route path='/secret/edit-product' element={isAuth ? <EditProduct /> : <Navigate to='/login' replace />} />
        <Route path='/secret/delete-product' element={isAuth ? <DeleteProduct /> : <Navigate to='/login' replace />} />
      </Routes>
    </>
  )
}

export default RoutesIndex
