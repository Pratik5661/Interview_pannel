import React from 'react'
  import {Link} from 'react-router-dom'
import {FaUserCircle} from 'react-icons/fa'
const Login = () => {

  return (
<>
<form className='login'>

<div>
<div><FaUserCircle /></div>
<h1>Login</h1>
<input type="text" name="" id=""  placeholder='Username'/>
<br />
<input type="text" placeholder='Enter your password' />
<br />
<div className='check'>
<label>
    <input type="checkbox" /> 
    Remember me
</label>
    <Link to='/'>Forget Password ?</Link>
</div>
<button type='submit'>Login</button>

<h6>Don't have account an ? <Link to='/registration'>Sign In</Link></h6>
</div>  
</form>


</>
  )
}

export default Login