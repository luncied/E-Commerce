import useForm from '~/hooks/useForm'
import { useNavigate } from 'react-router-dom'
import { registerUserService } from '~/services/userServices'
import '~/styles/Form.css'

function Signup () {
  // Usamos el useNavigate para mover al usuario a otra ruta
  const navigate = useNavigate()

  const data = {
    first_name: '',
    last_name: '',
    gender: '',
    email: '',
    password: ''
  }

  async function sendData (datos) {
    try {
      const response = await registerUserService(datos)
      if (response.status === 201) {
        console.log('Usuario creado exitosamente')
        navigate('/login')
      }
    } catch (error) {
      console.error('An error has ocurred on Signup...', error.message)
    }
  }

  const { input, handleInputChange, handleSubmit } = useForm(sendData, data)

  return (
    <>
      <div className='form-container'>
        <form className='form-signin w-100 m-auto' onSubmit={handleSubmit}>
          <h1 className='h3 mb-3 fw-normal text-center'>Please sign up</h1>

          <div className='form-floating'>
            <input
              type='text'
              className='form-control'
              id='first_name'
              name='first_name'
              placeholder='Name'
              value={input.first_name}
              onChange={handleInputChange}
            />
            <label htmlFor='first_name'>First Name</label>
          </div>

          <div className='form-floating'>
            <input
              type='text'
              className='form-control'
              id='last_name'
              name='last_name'
              placeholder='Last Name'
              value={input.last_name}
              onChange={handleInputChange}
            />
            <label htmlFor='last_name'>Last Name</label>
          </div>

          <div className='form-floating'>
            <select
              type='select'
              className='form-control'
              id='gender'
              name='gender'
              placeholder='Gender'
              value={input.gender}
              onChange={handleInputChange}
            >
              <option value=''>Choose...</option>
              <option value='M'>Male</option>
              <option value='F'>Female</option>
            </select>
            <label htmlFor='Gender'>Gender</label>
          </div>

          <div className='form-floating'>
            <input
              type='email'
              className='form-control'
              id='floatingInput'
              name='email'
              placeholder='name@example.com'
              value={input.email}
              onChange={handleInputChange}
            />
            <label htmlFor='floatingInput'>Email address</label>
          </div>

          <div className='form-floating'>
            <input
              type='password'
              className='form-control'
              id='floatingPassword'
              name='password'
              placeholder='Password'
              value={input.password}
              onChange={handleInputChange}
            />
            <label htmlFor='floatingPassword'>Password</label>
          </div>

          <button className='w-100 btn btn-lg btn-primary' type='submit'>
            Sign up
          </button>
        </form>
      </div>
    </>
  )
}

export default Signup
