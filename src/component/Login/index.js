import React from 'react'
import { Link } from 'react-router-dom'
import { FaUserCircle } from 'react-icons/fa'
import { Row, Col } from 'react-bootstrap';
import { Formik } from 'formik';
import * as Yup from 'yup';
import './style.scss';

const formValidation = Yup.object().shape({
  email: Yup.string().required('Username required'),
  password: Yup.string().required('Password is required')
})

const Login = () => {

  const login = async(value)=>{
    try{
      const payload = {
        ...value,
        
      }
    } catch(err){

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
          ({errors, handleChange, handleSubmit, touched, handleBlur }) => (
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
                    <input type="text" placeholder='Enter your password' className='login__text'onChange={handleChange} onBlur={handleBlur} />
                    <div className="login__check">
                      <div>
                        <input type="checkbox" /> &nbsp;
                        <label>
                          Remember me
                        </label>
                        <Link to='/'><p>Forget Password ? </p></Link>
                      </div>
                    </div>
                    <button type='submit'>Login</button>
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
    </Row>
  )
}

export default Login