import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap';
import SelectBox from '../Shared/Select/index';
import './style.scss';

const Registration = () => {
  return (
    <Row className='registration'>
      <Col md={12}>
        <div className='registration__header'>
          <h1>Registration Form</h1>
        </div>
        <Row>
          <Col sm={12} className='registration__form'>
            <input type="text" placeholder='Full Name' className='registration__text' />
            <input type="text" placeholder='Mobile No.' className='registration__text' />
            <input type="text" placeholder='Email' className='registration__text' />
            <SelectBox options={[{text:'Choose your role'},{text:'Interviewer'},{text:'Developer'}]} />
            {/* <input type="password" placeholder='Create Password' className='registration__text' /> */}
            <div className='file'>
            <span>Resume</span>
            <input type="file" id="actual-btn" hidden/>
            <label for="actual-btn">Choose File</label>
            {/* <span id="file-chosen">No file chosen</span> */}
            </div>
            <Link to='/verfication' className='nextButton'>Next</Link>
            <h6 className='mt-3'>Already Registered ? <Link to='/login'>Log In</Link></h6>
          </Col>
        </Row>
      </Col>
    </Row>
  )
}

export default Registration