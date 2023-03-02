import { React, useEffect, useState } from "react";
import { Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import CustomToast from "../Shared/Toast";
import SelectBox from "../Shared/Select";
import { axiosObject } from '../../component/Shared/Api';
import DatePickerF from "../interview_schedule/datePicker";
import { INTERVIEW_DURATION } from '../../constant';
import './style.scss'

let Schedule_Interview = () => {
    const [skills, setSkills] = useState([]);
    const [snack, setSnack] = useState({});
    const [interviewers, setInterviewers] = useState([]);
    const [developers, setDevelopers] = useState([]);
    const [scheduleData, setScheduleData] = useState({ scheduleDate: new Date() });
    const navigate = useNavigate();

    const getInterViewers = async () => {
        try {
            const params = {
                role: 'Interviewer'
            }
            const response = await axiosObject.get('getUsers', { params });
            if (response.data.status === 'success') {
                response.data.data.unshift({ fullName: 'Select', value: '' })
                setInterviewers(response.data.data.map(data => ({ text: data.fullName, value: data._id })))
            } else {
                setInterviewers([]);
            }
        } catch (err) {

        }
    }

    const getDevelopers = async () => {
        try {
            const params = {
                role: 'Developer'
            }
            const response = await axiosObject.get('getUsers', { params });
            if (response.data.status === 'success') {
                response.data.data.unshift({ fullName: 'Select', value: '' })
                setDevelopers(response.data.data.map(data => ({ value: data._id, text: data.fullName })))
            } else {
                setDevelopers([]);
            }
        } catch (err) {

        }
    }

    const scheduleInterview = async () => {
        try {
            if (skills.length <= 0) {
                setSnack({ isShowSnack: true, snackMsg: 'please enter skills', variant: 'error' });
                return;
            }

            if (!(scheduleData.scheduleDate && scheduleData.duration && scheduleData.candidate && scheduleData.interviewType && scheduleData.interviewer && scheduleData.startTime)) {
                setSnack({ isShowSnack: true, snackMsg: 'please enter all required fields', variant: 'error' });
                return;
            }
            scheduleData['duration'] = Number(scheduleData.duration);

            const response = await axiosObject.post('schedule/interview', scheduleData);
            if (response.data.success) {
                setSnack({ isShowSnack: true, snackMsg: response.data.message, variant: 'success' });
                setScheduleData({});
                setTimeout(() => {
                    navigate('/interviews');
                }, [1000])
            } else {
                setSnack({ isShowSnack: true, snackMsg: response.data.message, variant: 'warning' });
            }
            console.log(response, 'schedule')
        } catch (err) {
            setSnack({ isShowSnack: true, snackMsg: 'something went wrong', variant: 'error' })
        }
    }

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

    const handleInputChange = (key, value) => {
        scheduleData[key] = value;
        setScheduleData({ ...scheduleData });
    }

    useEffect(() => {
        getInterViewers();
        getDevelopers();
    }, [])

    return (
        <>
            <Row className="schedule">
                <Col md={12}>
                    <div className="card">
                        <div className="card-header">
                            <div className="header">
                                <h1 className="heading">Schedule New Interview</h1>
                                <p className="heading">How you would like to schedule the interview</p>
                            </div>
                        </div>
                        <div className="card-body">
                            <h2 className="heading">
                                Share a fixed time slot with the candidate
                            </h2>
                            <div className='skills__tags '>
                                {skills.map(skill => (
                                    <div className="skills-item" key={skill}>
                                        {skill}
                                        <button
                                            type="button"
                                            className="skills_button"
                                            onClick={() => handleDelete(skill)}
                                        >
                                            &times;
                                        </button>
                                    </div>
                                ))}
                            </div>
                            <Row className="">
                                <Col md={6}>
                                    <label>Skills Name <span className="required">*</span></label>
                                    <input
                                        className='skills__text form-control'
                                        placeholder="Type skills and press Enter..."
                                        onKeyDown={handleKeyDown}
                                    />
                                </Col>
                                <Col md={6}>
                                    <label>Select Candidate <span className="required">*</span></label>
                                    <SelectBox options={developers} onChange={(e) => handleInputChange('candidate', e.target.value)} />
                                </Col>
                                <Col md={6} className='mt-3 schedule__interviewType'>
                                    <label>Interview Type <span className="required">*</span></label>
                                    <SelectBox options={[{ text: 'Select Type' }, { text: 'Google Meet' }]}
                                        className='select' onChange={(e) => handleInputChange('interviewType', e.target.value)} />
                                </Col>
                                <Col md={6} className='mt-3'>
                                    <label>Select Interviewer <span className="required">*</span></label>
                                    <SelectBox options={interviewers} onChange={(e) => handleInputChange('interviewer', e.target.value)} />
                                </Col>
                                <Col md={6} className='mt-3'>
                                    <label>Interview Duration <span className="required">*</span></label>
                                    <div className="interview_time">
                                        {
                                            INTERVIEW_DURATION.map(data => (
                                                <>
                                                    <input type='radio' name={data} value={data} style={{ "cursor": "pointer" }} className='form-check-input' onChange={() => handleInputChange('duration', data)} />
                                                    <div className='timing'>{data} Min</div>
                                                </>
                                            ))
                                        }
                                    </div>
                                </Col>
                                <Col md={6} className='mt-3'>
                                    <label>Custom Duration</label>
                                    <div className="">
                                        <input type='number' min='0' className='form-control' onChange={(e) => handleInputChange('duration', e.target.value)} />
                                    </div>
                                </Col>
                                <Col md={6} className='mt-3'>
                                    <label>Date <span className="required">*</span></label>
                                    <div className="">
                                        <DatePickerF handleChange={(date) => handleInputChange('scheduleDate', date)} selected={scheduleData.scheduleDate} />
                                    </div>
                                </Col>
                                <Col md={6} className='mt-3'>
                                    <label>Start Time <span className="required">*</span></label>
                                    <div className="">
                                        <select className='interview_timing' onChange={(e) => handleInputChange('startTime', e.target.value)}>
                                            <option value=''>Select</option>
                                            <option value='09:30 AM'>09:00 AM</option>
                                            <option>09:30 AM</option>
                                            <option>10:00 AM</option>
                                            <option>10:30 AM</option>
                                            <option>11:00 AM</option>
                                            <option>11:30 AM</option>
                                            <option>12:00 PM</option>
                                            <option>12:30 PM</option>
                                            <option>01:00 PM</option>
                                            <option>01:30 PM</option>
                                            <option>02:00 PM</option>
                                            <option>02:30 PM</option>
                                            <option>03:00 PM</option>
                                            <option>03:30 PM</option>
                                            <option>04:00 PM</option>
                                            <option>04:30 PM</option>
                                            <option>05:00 PM</option>
                                            <option>05:30 PM</option>
                                            <option>06:00 PM</option>
                                            <option>06:30 PM</option>
                                            <option>07:00 PM</option>
                                        </select>
                                    </div>
                                </Col>
                            </Row>
                        </div>

                        <div className="card-footer">
                            <div className="d-flex justify-content-end">
                                <button type='button' className='login__btn'>Cancel</button>
                                <button type='button' className='login__btn login__btn--schedule' onClick={scheduleInterview}>Schedule</button>
                            </div>
                        </div>
                    </div>


                </Col>
                {
                    snack.isShowSnack && <CustomToast variant={snack.variant} message={snack.snackMsg} handleClose={() => setSnack({ isShowSnack: false })} />
                }

            </Row>
        </>
    )
}

export default Schedule_Interview;