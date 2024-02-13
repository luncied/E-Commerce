import { useState, useEffect } from 'react'
import { useAuthContext } from '~/hooks/useAuthContext'
import { getSingleUserService } from '~/services/userServices'
import { PersonBadge, Postcard, GenderAmbiguous, EnvelopeAt } from 'react-bootstrap-icons'

function Dashboard () {
  const { userPayload } = useAuthContext()
  const [userData, setUserData] = useState({})

  useEffect(() => {
    async function fetchUserData () {
      try {
        const response = await getSingleUserService(userPayload.id)
        if (response.status === 200) {
          setUserData(response.data)
        }
      } catch (error) {
        console.error('An error has ocurred on Dashboard...', error.message)
      }
    }
    fetchUserData()
  }, [userPayload.id])

  return (
    <div className='tw-container tw-max-w-full tw-flex tw-flex-col tw-justify-evenly tw-items-center tw-w-screen tw-h-screen tw-pt-4'>
      <h2 className=''>
        Información del Usuario
      </h2>
      {
        userData &&
          (
            <div className='tw-container tw-max-w-xl tw-max-h-xl tw-flex tw-flex-col tw-items-center '>
              <div className='form-control tw-flex tw-flex-col tw-items-center tw-py-20'>
                <div className='input-group tw-max-w-md'>
                  <span className='input-group-text' id='basic-addon1'>
                    <PersonBadge />
                  </span>
                  <span className='form-control' aria-label='Username' aria-describedby='basic-addon1'>First Name</span>
                  <span className='form-control tw-text-end' aria-label='Username' aria-describedby='basic-addon1'>{userData.first_name}</span>
                </div>
                <div className='input-group tw-max-w-md'>
                  <span className='input-group-text' id='basic-addon1'>
                    <Postcard />
                  </span>
                  <span className='form-control' aria-label='Username' aria-describedby='basic-addon1'>Last Name</span>
                  <span className='form-control tw-text-end' aria-label='Username' aria-describedby='basic-addon1'>{userData.last_name}</span>
                </div>
                <div className='input-group tw-max-w-md'>
                  <span className='input-group-text' id='basic-addon1'>
                    <GenderAmbiguous />
                  </span>
                  <span className='form-control' aria-label='Username' aria-describedby='basic-addon1'>Gender</span>
                  <span className='form-control tw-text-end' aria-label='Username' aria-describedby='basic-addon1'>{userData.gender}</span>
                </div>
                <div className='input-group tw-max-w-md'>
                  <span className='input-group-text' id='basic-addon1'>
                    <EnvelopeAt />
                  </span>
                  <span className='form-control' aria-label='Username' aria-describedby='basic-addon1'>e-mail</span>
                  <span className='form-control tw-text-end' aria-label='Username' aria-describedby='basic-addon1'>{userData.email}</span>
                </div>
              </div>
            </div>
          )
      }
    </div>
  )
}

export default Dashboard
