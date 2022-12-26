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
            {/* <input type="text" placeholder='OTP Verification' /> */}
            <select name="" id="">
              <option value="">Choose your flied</option>
              <option value="">Interviewer</option>
              <option value="">Developer</option>
            </select>
            <br />
            <input type="password" placeholder='Create Password' />
            <br />
            {/* <button type='submit'>SUBMIT</button> */}
            <button><Link to='/verification'>SUBMIT</Link></button>

            <h5>Already Registered ? <Link to='/login'>Log In</Link></h5>
        </div>
    </form>
    </>
  )
}

export default Registration