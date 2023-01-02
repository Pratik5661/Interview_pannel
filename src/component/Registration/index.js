import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import SelectBox from '../Shared/Select/index';
import './style.scss';

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

  const goNext = ()=>{
    navigate('/verfication')
  }

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
            <SelectBox options={[{ text: 'Choose your role' }, { text: 'Interviewer' }, { text: 'Developer' }]} />
            <div className='file'>
              <span>Resume</span>
              <input type="file" id="actual-btn" hidden />
              <label for="actual-btn">Choose File</label>
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

            <button className='registration__btn mt-3' type='button' onClick={goNext}>Next</button>
            <h6 className='mt-3'>Already Registered ? <Link to='/login'>Log In</Link></h6>
          </Col>
        </Row>
      </Col>
    </Row>
  )
}

export default Registration