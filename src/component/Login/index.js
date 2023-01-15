import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaUserCircle } from 'react-icons/fa'
import { Row, Col } from 'react-bootstrap';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { axiosObject } from '../Shared/Api';
import CustomToast from '../../component/Shared/Toast/index';
import './style.scss';

const formValidation = Yup.object().shape({
  email: Yup.string().required('Username required'),
  password: Yup.string().required('Password is required')
})

const Login = () => {
  const [snack, setSnack] = useState({});
  const navigate = useNavigate('');

  const login = async (value) => {
    try {
      const payload = {
        ...value,
      }
      const { data = {} } = await axiosObject.post('login', payload);
      if (data.status === 'success') {
        setSnack({ isShowSnack: true, snackMsg: data.message, variant: 'success' });
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', JSON.stringify(data.user));
        if (data.user.role === 'Developer' || data.role === 'Interviewer') {
          navigate('/profile')
        } else {
          navigate('/dashboard')
        }
      } else {
        setSnack({ isShowSnack: true, snackMsg: data.message, variant: 'warning' });
      }
    } catch (err) {
      setSnack({ isShowSnack: true, snackMsg: err.response.data.message, variant: 'danger' });
    }
  }

  return (
    <Row className='login'>
      <Formik
        initialValues={{
          fullName: '',
          mobile: '',
          email: '',
          role: ''
        }}
        validationSchema={formValidation}
        onSubmit={values => { login(values) }}
      >
        {
          ({ errors, handleChange, handleSubmit, touched, handleBlur }) => (
            <form onSubmit={handleSubmit}>
              <Col md={12}>
                <div className='login__header'>
                  <div><FaUserCircle /></div>
                  <h1>Login</h1>
                </div>
                <Row>
                  <Col sm={12} md={12} className='login__form'>
                    <div>
                      <input type="text" id="" placeholder='Username' className='login__text' name="email" onChange={handleChange} onBlur={handleBlur} />
                      {errors.email && touched.email && <div className='validationError ml-3'>{errors.email}</div>}
                    </div>

                    <div>
                      <input type="password" placeholder='Enter your password' name="password" className='login__text' onChange={handleChange} onBlur={handleBlur} />
                      {errors.password && touched.password && <div className='validationError ml-3'>{errors.password}</div>}
                    </div>

                    <div className="login__check">
                      <div>
                        <input type="checkbox" /> &nbsp;
                        <label>
                          Remember me
                        </label>
                        <Link to='/'><p>Forget Password ? </p></Link>
                      </div>
                    </div>

                    <button type='submit' className='login__btn'>Login</button>
                    <div>
                      <h6 className='mt-3'>Don't have account an ? <Link to='/registration' className='signup_btn'>Sign Up</Link></h6>
                    </div>
                  </Col>
                </Row>
              </Col>
            </form>
          )
        }
      </Formik>
      {
        snack.isShowSnack && <CustomToast variant={snack.variant} message={snack.snackMsg} handleClose={() => setSnack({ isShowSnack: false })} />
      }
    </Row>
  )
}

export default Login