import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { Formik } from 'formik';
import * as Yup from 'yup';
import {axiosObject} from '../Shared/Api';
import SelectBox from '../Shared/Select/index';
import CustomToast from '../Shared/Toast/index';
import './style.scss';

const formValidation = Yup.object().shape({
  fullName: Yup.string().required("Name is required"),
  mobile: Yup.number("Please enter valid mobile").required('Mobile is required'),
  email: Yup.string().email("Invalid email").required('Email is required'),
  role: Yup.string().required('Role is required')
})
const Registration = () => {
  const [skills, setSkills] = useState([]);
  const navigate = useNavigate();

  const handleKeyDown = evt => {
    if (["Enter", "Tab"].includes(evt.key)) {
      evt.preventDefault();
      const value = evt.target.value.trim();
      if (value) {
        let addedSkills = skills;
        addedSkills.push(value)
        setSkills([...addedSkills]);
        evt.target.value = '';
      }

    }
  }

  const handleDelete = (skill) => {
    setSkills(skills.filter(data => data !== skill));
  }

  const goNext = () => {
    navigate('/verfication')
  }

  const register = async(values)=> {
    try{
      const payload = {
        ...values,
        skills
      }
      const response = await axiosObject.post(`register`,payload);
      console.log(response,'pp')
    } catch(err){

    }
  }

  return (
    <Row className='registration'>
      <Col md={12}>
        <div className='registration__header'>
          <h1>Registration Form</h1>
        </div>
        <Row>
          <Formik
            initialValues={{
              fullName: '',
              mobile: '',
              email: '',
              role: ''
            }}
            validationSchema={formValidation}
            onSubmit={values => { register(values) }}
          >
            {
              ({ errors, handleChange, handleSubmit, touched, handleBlur }) => (
                <form onSubmit={handleSubmit}>
                  <Col sm={12} className='registration__form'>
                    <input type="text" placeholder='Full Name' className='registration__text' name="fullName" onChange={handleChange} onBlur={handleBlur} />
                    {errors.fullName && touched.fullName && <span className='validationError'>{errors.fullName}</span>}

                    <input type="text" placeholder='Mobile No.' className='registration__text' name="mobile" onChange={handleChange} onBlur={handleBlur} />
                    {errors.mobile && <span className='validationError'>{errors.mobile}</span>}

                    <input type="text" placeholder='Email' className='registration__text' name="email" onChange={handleChange} onBlur={handleBlur} />
                    {errors.email && <span className='validationError'>{errors.email}</span>}

                    <SelectBox options={[{ text: 'Choose your role' }, { text: 'Interviewer' }, { text: 'Developer' }]} name="role" onChange={handleChange} onBlur={handleBlur} />
                    {errors.role && <span className='validationError'>{errors.role}</span>}

                    <div className='file'>
                      <span>Resume</span>
                      <input type="file" id="actual-btn" hidden />
                      <label htmlFor="actual-btn">Choose File</label>
                    </div>

                    <div className='registration__tags'>
                      {skills.map(skill => (
                        <div className="tag-item" key={skill}>
                          {skill}
                          <button
                            type="button"
                            className="button"
                            onClick={() => handleDelete(skill)}
                          >
                            &times;
                          </button>
                        </div>
                      ))}
                    </div>
                    <input
                      className='registration__text'
                      placeholder="Type skill and press Enter..."
                      onKeyDown={handleKeyDown}
                    />

                    <button className='registration__btn mt-3' type='submit'>Next</button>
                    <h6 className='mt-3'>Already Registered ? <Link to='/login'>Log In</Link></h6>
                  </Col>
                </form>
              )
            }
          </Formik>

        </Row>
      </Col>
      <CustomToast variant="success" />
    </Row>
  )
}

export default Registration