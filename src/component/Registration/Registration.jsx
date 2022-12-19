import React from 'react'
import { Link } from 'react-router-dom'
const Registration = () => {
  return (
    <>
    <form className='registration'>
            <h1>Registration Form</h1>
        <div>
            <input type="text" placeholder='Full Name' />
            <br />
            <input type="text" placeholder='Mobile No.' />
            <br />
            <input type="text" placeholder='OTP Verification' />
            <br />
            <input type="text" placeholder='Create Password' />
            <br />
            <button type='submit'>SUBMIT</button>

            <h5>Already Registered ? <Link to='/login'>Log In</Link></h5>
        </div>
    </form>
    </>
  )
}

export default Registration