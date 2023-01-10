import React from "react";
import { Link } from 'react-router-dom'
import { Row, Col} from 'react-bootstrap';
import './style.scss';
// import CustomToast from '../Shared/Toast/index';
import {toast} from 'react-toastify'

const Verifaction = () => {

  const toastt = () => {
    toast("Success")  
  }
  return (
    <>
      <Row className='registration verification'>
        <Col md={12}>
          <div className='registration__header'>
            <h1>Verifaction</h1>
          </div>
          <Row>
            <Col sm={12} className='registration__form'>
              <input type="text" placeholder='Enter OTP' className='registration__text' />
              <input type="password" placeholder='Enter password' className='registration__text' />
              <input type="password" placeholder='Re-enter password' className='registration__text' />
              <button className='registration__btn mt-3' type='button' onClick={()=>toastt()}>Submit</button>
              <h6 className='mt-3'>Already Registered ? <Link to='/login'>Log In</Link></h6>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  )
}

export default Verifaction