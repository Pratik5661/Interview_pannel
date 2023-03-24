import React, { useState } from 'react'
import { Row, Col } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { axiosObject } from '../Shared/Api';
import SelectBox from '../Shared/Select/index';
import CustomToast from '../Shared/Toast/index';
// import './style.scss';

const formValidation = Yup.object().shape({
    fullName: Yup.string().required("Name is required"),
    mobile: Yup.number("Please enter valid mobile").required('Mobile is required'),
    email: Yup.string().email("Invalid email").required('Email is required'),
    role: Yup.string().required('Role is required')
})
const Add_Candidate = (props) => {
    const [skills, setSkills] = useState([]);
    const [snack, setSnack] = useState({});
    const [resume, setResume] = useState({});
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const pathName = window.location.pathname;

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

    const goNext = (email) => {
        navigate(`/verfication?email=${email}`)
    }

    const register = async (values) => {
        try {
            const payload = {
                ...values,
                skills,
                resume: resume.uploadedFile || ''
            }
            if (pathName.includes('/add_candidate') && !password) {
                setSnack({ isShowSnack: true, snackMsg: 'please enter login password', variant: 'warning' });
                return
            }
            if (pathName.includes('/add_candidate')) {
                payload.password = password;
                payload.isEmailVerify = true;
            }
            const { data = {} } = await axiosObject.post(`register`, payload);
            if (data.status === 'success') {
                setSnack({ isShowSnack: true, snackMsg: data.message, variant: 'success' });
                if (pathName.includes('/add_candidate')) {
                    setTimeout(() => {
                        navigate('/developer_panel')
                    }, 2000)
                } else {
                    setTimeout(() => {
                        goNext(values.email)
                    }, 1000)
                }

            }
            else {
                setSnack({ isShowSnack: true, snackMsg: data.message, variant: 'warning' });
            }
        } catch (err) {
            setSnack({ isShowSnack: true, snackMsg: err.response.data.message, variant: 'error' });
        }
    }

    const uploadFile = async (event) => {
        if (event.target.files.length) {
            const formData = new FormData();
            formData.append('file', event.target.files[0]);
            const { data = {} } = await axiosObject.post('upload', formData);
            if (data.status === 'success') {
                setResume({ fileName: event.target.files[0].name, uploadedFile: data.fileName });
                setSnack({ isShowSnack: true, snackMsg: data.message, variant: 'success' });
            } else {
                setSnack({ isShowSnack: true, snackMsg: 'unable to upload file', variant: 'error' });
            }
            event.target.value = null;
        }
    }

    return (
        <Row className='registration' style={{ "margin": "0%" }}>
            <Col md={12}>
                <div className='registration__header'>
                    <h1 style={{ "fontFamily": "math" }}>{pathName.includes('add_candidate') ? 'Add User' : 'New Registration'}</h1>
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
                                        <div>
                                            <input type="text" placeholder='Full Name' className='registration__text' name="fullName" onChange={handleChange} onBlur={handleBlur} />
                                            {errors.fullName && touched.fullName && <div className='validationError ml-3'>{errors.fullName}</div>}
                                        </div>

                                        <div>
                                            <input type="text" placeholder='Mobile No.' className='registration__text' name="mobile" onChange={handleChange} onBlur={handleBlur} />
                                            {errors.mobile && <div className='validationError'><div className='validationErrorr'>{errors.mobile.slice(0, 30)}</div></div>}
                                        </div>

                                        <div>
                                            <input type="text" placeholder='Email' className='registration__text' name="email" onChange={handleChange} onBlur={handleBlur} />
                                            {errors.email && <div className='validationError_email'>{errors.email}</div>}
                                        </div>
                                        {
                                            window.location.pathname.includes('/add_candidate') && (
                                                <div>
                                                    <input type="password" placeholder='Enter password' className='registration__text' name="password" onChange={(e) => setPassword(e.target.value)} />
                                                </div>
                                            )
                                        }

                                        <div className='mt-2'>
                                            <SelectBox options={[{ text: 'Choose your role' }, { text: 'Interviewer' }, { text: 'Developer' }]} name="role" onChange={handleChange} onBlur={handleBlur} />
                                            {errors.role && <div className='validationError_role'>{errors.role}</div>}
                                        </div>

                                        {
                                            resume.fileName && (
                                                <div className='registration__tags mt-3'>
                                                    <div className='tag-item'>{resume.fileName}
                                                        <button
                                                            type="button"
                                                            className="button"
                                                            onClick={() => setResume({})}
                                                        >
                                                            &times;
                                                        </button>
                                                    </div>
                                                </div>
                                            )
                                        }


                                        <div className='file mt-3'>
                                            <span className='resume'>Resume</span>
                                            <input type="file" id="actual-btn" hidden onChange={uploadFile} />
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



                                        <button className='registration__btn mt-3' type='submit'>Submit</button>
                                        {/* <Button
                                        block
                                        variant="danger"
                                        className="mb-3 btn_google"

                                        >
                                        Sign up with Google
                                        </Button> */}
                                        {/* <Link to='/verfication' className='registration__btn next_btn mt-3'>Next</Link> */}
                                        {/* <h6 className='mt-3'>Already Registered ? <Link to='/login' className='login_btn'>Log In</Link></h6> */}
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
    )
}

export default Add_Candidate