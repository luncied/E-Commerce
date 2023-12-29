import { Routes, Route, Navigate } from 'react-router-dom'
import { Home, Dashboard, Login, Signup, Secret, Cart } from '../pages'
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
      </Routes>
    </>
  )
}

export default RoutesIndex
