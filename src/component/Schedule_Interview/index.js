import { React, useState } from "react";
import { Row, Col, Button } from "react-bootstrap";
import CustomToast from "../Shared/Toast";
import SelectBox from "../Shared/Select";
import './style.scss'
import DatePickerF from "../interview_schedule/datePicker";

let Schedule_Interview = () => {
    const [skills, setSkills] = useState([]);
    const [snack, setSnack] = useState({});


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
    return (
        <>
            <Row>
                <div className="card">
                    <div className="card-header">
                        <Col>
                            <div className="header">
                                <h1 className="heading">Schedule New Interview</h1>
                                <p className="heading">How you would like to schedule the interview</p>
                            </div>  
                        </Col>
                    </div>
                    <div className="card-body">
                        <Col>
                            <h2 className="heading">
                                Share a fixed time slot with the candidate
                            </h2>

                            <form>
                                <div className="row">
                                    <label className="skills_name">Skills Name*</label>
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
                                    <div className="col-md-6">
                                        <input
                                            className='skills__text'
                                            placeholder="Type skills and press Enter..."
                                            onKeyDown={handleKeyDown}
                                        />
                                    </div>

                                    <div className='candidate_input mb-2 col-md-6'>
                                        <label>Select Candidate*</label>
                                        <SelectBox options={[{ text: 'Select Candidate' }, { text: 'Pratik' }, { text: 'Abc' }]} />
                                    </div>

                                    <div className='candidate_input col-md-6'>
                                        <label>Interview Type*</label>
                                        <SelectBox options={[{ text: 'Select Type' }, { text: 'Google Meet' }]} className='select' />
                                    </div>

                                    <div className='candidate_input type mt-2 col-md-6'>
                                        <label>Select Interviewer*</label>
                                        <SelectBox options={[{ text: 'Select Type' }, { text: 'Pratik' }]} />
                                    </div>
                                    <div className=' mt-2 col-md-6'>
                                        <label>Interview Duration*</label>
                                        <div className="interview_time">
                                            <input  type='radio' value='15 Min' style={{"cursor" : "pointer"}}  />
                                            <div className='timing'>15 Min</div>
                                            <input type='radio' value='30 Min' name="30 Min" style={{"cursor" : "pointer"}}  />
                                            <div className='timing'>30 Min</div>
                                            <input type='radio' value='45 Min' name="45 Min" style={{"cursor" : "pointer"}} />
                                            <div className='timing'>45 Min</div>
                                            <input type='radio' value='60 Min' name="60 Min" style={{"cursor" : "pointer"}} />
                                            <div className='timing'>60 Min</div>
                                        </div>

                                    </div>
                                    <div className='mt-2 col-md-6'>
                                        <label>Custom Duration</label>
                                        <div className="">
                                            <input style={{"outline" : "none"}} />
                                        </div>
                                    </div>

                                    <div className='mt-2 col-md-6'>
                                        <label>Date*</label>
                                        <div className="">
                                            <DatePickerF />
                                        </div>
                                    </div>

                                    <div className='mt-2 col-md-6'>
                                        <label>Start Time*</label>
                                        <div className="">
                                            <select className='interview_timing'>
                                                <option>09:00 AM</option>
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
                                    </div>
                                </div>
                                <div className="schedule_interview">
                                    <Button >Schedule</Button>
                                    <Button className="cancel_btn" >Cancel</Button>
                                </div>
                            </form>
                        </Col>
                    </div>
                </div>

                {
                    snack.isShowSnack && <CustomToast variant={snack.variant} message={snack.snackMsg} handleClose={() => setSnack({ isShowSnack: false })} />
                }

            </Row>
        </>
    )
}

export default Schedule_Interview;