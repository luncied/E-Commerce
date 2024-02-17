import { NavLink } from 'react-bootstrap'

function Status ({ setRedirect, btnText, children }) {
  function handleAddButton () {
    setRedirect(false)
  }

  return (
    <div className='tw-min-h-screen tw-flex tw-items-center'>
      <div className='tw-min-w-full'>
        <div className='tw-font-bold tw-text-4xl'>
          {children}
        </div>
        <div className='tw-py-28 tw-min-w-full tw-justify-center'>
          <button className='tw-mx-4 btn btn-outline-primary' onClick={handleAddButton}>{btnText}</button>
          {/* <NavLink to='/' role='button' className='tw-mx-4 btn btn-outline-secondary'>Ir al Home</NavLink> */}
        </div>
      </div>
    </div>
  )
}

export default Status
