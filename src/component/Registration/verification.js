import React, {useState} from "react";
import { Link, useSearchParams } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { axiosObject } from '../Shared/Api';
import CustomToast from '../Shared/Toast/index';

import './style.scss';


const formValidation = Yup.object().shape({
  emailVerifyOtp: Yup.number("Please enter valid otp").required('Otp is required').min(4, "Otp must be of 4 digit"),
  password: Yup.string().required('Password is required'),
  confirmPassword: Yup.string().required('Confirm password is required').oneOf([Yup.ref('password'), null], 'Confirm password must match')
})

const Verifaction = () => {
  const [searchParam] = useSearchParams();
  const [snack, setSnack] = useState({});
  const navigate = useNavigate();

  const verifyEmail = async (values) => {
    try {
      const payload = {
        email: searchParam.get('email'),
        password: values.password,
        emailVerifyOtp: values.emailVerifyOtp
      }
      const { data = {} } = await axiosObject.post('verify', payload);
      if (data.status === 'success') {
        setSnack({ isShowSnack: true, snackMsg: data.message, variant: 'success' });
        setTimeout(() => {
          navigate('/login')
        }, 1000)
      }
      else {
        setSnack({ isShowSnack: true, snackMsg: data.message, variant: 'warning' });
      }
    } catch (err) {
      setSnack({ isShowSnack: true, snackMsg: err.response.data.message, variant: 'danger' });
    }
  }
  return (
    <>
      <Row className='registration verification'>
        <Col md={12}>
          <div className='registration__header'>
            <h1>Verifaction</h1>
          </div>
          <Row>
            <Formik
              initialValues={{
                emailVerifyOtp: '',
                password: '',
                confirmPassword: '',
              }}
              validationSchema={formValidation} onSubmit={values => { verifyEmail(values) }}>
              {
                ({ errors, handleChange, handleSubmit, touched, handleBlur }) => (
                  <form onSubmit={handleSubmit}>
                    <Col sm={12} className='registration__form'>
                      <div>
                        <input type="text" placeholder='Enter OTP' className='registration__text' name="emailVerifyOtp" onChange={handleChange} onBlur={handleBlur} />
                        {errors.emailVerifyOtp && touched.emailVerifyOtp && <div className='validationError ml-3'>{errors.emailVerifyOtp}</div>}
                      </div>
                      <div>
                        <input type="password" placeholder='Enter password' className='registration__text' name="password" onChange={handleChange} onBlur={handleBlur} />
                        {errors.password && touched.password && <div className='validationError ml-3'>{errors.password}</div>}
                      </div>
                      <div>
                        <input type="password" placeholder='Re-enter password' className='registration__text' name="confirmPassword" onChange={handleChange} onBlur={handleBlur} />
                        {errors.confirmPassword && touched.confirmPassword && <div className='validationError ml-3'>{errors.confirmPassword}</div>}
                      </div>
                      <button className='registration__btn mt-3' type='submit' >Submit</button>
                      <h6 className='mt-3'>Already Registered ? <Link to='/login'>Log In</Link></h6>
                    </Col>
                  </form>
                )
              }
            </Formik>
          </Row>
        </Col>
        {
          snack.isShowSnack && <CustomToast variant={snack.variant} message={snack.snackMsg} handleClose={() => setSnack({ isShowSnack: false })} />
        }
      </Row>
    </>
  )
}

export default Verifaction