import React from 'react'
import { Link } from 'react-router-dom'
import { FaUserCircle } from 'react-icons/fa'
import { Row, Col } from 'react-bootstrap';
import './style.scss';

const Login = () => {

  return (
    <Row className='login'>
      <Col md={12}>
        <div className='login__header'>
          <div><FaUserCircle /></div>
          <h1>Login</h1>
        </div>
        <Row>
          <Col sm={12} md={12} className='login__form'>
            <input type="text" name="" id="" placeholder='Username' className='login__text' />
            <input type="text" placeholder='Enter your password' className='login__text' />
            <div className="login__check">
              <div>
                <input type="checkbox" />
                <label>
                  Remember me
                </label>
              </div>
              <div><Link to='/'>Forget Password ?</Link></div>
            </div>
            <button type='submit'>Login</button>
            <h6 className='mt-3'>Don't have account an ? <Link to='/registration'>Sign Up</Link></h6>
          </Col>
        </Row>
      </Col>
    </Row>
  )
}

export default Login