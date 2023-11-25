import useForm from '~/hooks/useForm'
import { useAuthContext } from '~/hooks/useAuthContext'
import { useNavigate } from 'react-router-dom'
import { loginUserService } from '~/services/userServices'
import '~/styles/Form.css'

function Login () {
  const { login } = useAuthContext()

  const navigate = useNavigate()

  const data = {
    email: '',
    password: ''
  }

  async function sendData (datos) {
    try {
      const response = await loginUserService(datos)
      if (response.status === 200) {
        login(response.data.token)
        navigate('/dashboard')
      }
    } catch (error) {
      console.error('An error has ocurred on Signin...', error.message)
    }
  }

  const { input, handleInputChange, handleSubmit } = useForm(sendData, data)

  return (
    <>
      <div className='form-container'>
        <form className='form-signin w-100 m-auto' onSubmit={handleSubmit}>
          <h1 className='h3 mb-3 fw-normal text-center'>Please sign in</h1>

          <div className='form-floating'>
            <input
              type='email'
              className='form-control'
              id='email'
              name='email'
              placeholder='name@example.com'
              value={input.email}
              onChange={handleInputChange}
            />
            <label htmlFor='email'>Email address</label>
          </div>

          <div className='form-floating'>
            <input
              type='password'
              className='form-control'
              id='password'
              name='password'
              placeholder='Password'
              value={input.password}
              onChange={handleInputChange}
            />
            <label htmlFor='password'>Password</label>
          </div>
          <button className='w-100 btn btn-lg btn-primary' type='submit'>
            Sign in
          </button>
        </form>
      </div>
    </>
  )
}

export default Login
