import { useState, useEffect } from 'react'
import { useAuthContext } from '~/hooks/useAuthContext'
import { getSingleUserService } from '~/services/userServices'

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
    <>
      {
        userData?.first_name && <h2>{userData.first_name}</h2>
      }
      {
        userData?.last_name && <h2>{userData.last_name}</h2>
      }
      {
        userData?.gender && <h2>{userData.gender}</h2>
      }
      {
        userData?.email && <h2>{userData.email}</h2>
      }
    </>
  )
}

export default Dashboard
