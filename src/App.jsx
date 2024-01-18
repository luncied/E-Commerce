import { AuthProvider } from './context/AuthContext'
import { ProductsProvider } from './context/ProductsContext'
import { SecretProvider } from './context/SecretContext'
import { BrowserRouter } from 'react-router-dom'
import Header from './components/Header'
import RoutesIndex from './routes/RoutesIndex'
import './styles/App.css'

function App () {
  return (
    <>
      <AuthProvider>
        <ProductsProvider>
          <BrowserRouter>
            <Header />
            <SecretProvider>
              <RoutesIndex />
            </SecretProvider>
          </BrowserRouter>
        </ProductsProvider>
      </AuthProvider>
    </>
  )
}

export default App
