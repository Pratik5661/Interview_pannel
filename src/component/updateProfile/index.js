import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import './style.scss'
import {BsCheck2All} from 'react-icons/bs'

function UpdateProfile() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3 form">
        <Form.Group as={Col} md="6" controlId="validationCustom01" >
          <Form.Label  className='form_title'>First name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Enter your name..."
          />
          <Form.Control.Feedback>Correct <BsCheck2All /></Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="6" controlId="validationCustom02">
          <Form.Label className='form_title'>Email</Form.Label>
          <Form.Control
            required
            type="email"
            placeholder="Enter your email"
          />
          <Form.Control.Feedback>Correct <BsCheck2All /></Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="6" controlId="validationCustomUsername">
          <Form.Label className='form_title'>Password</Form.Label>
          <InputGroup hasValidation>
            <Form.Control
              type="password"
              placeholder="Enter password..."
              aria-describedby="inputGroupPrepend"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please choose a correct password.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
        <Form.Group as={Col} md="6" controlId="validationCustomUsername">
          <Form.Label className='form_title'>Change Password</Form.Label>
          <InputGroup hasValidation>
            <Form.Control
              type="password"
              placeholder="Enter a new password"
              aria-describedby="inputGroupPrepend"
              required
            />
            <Form.Control.Feedback type="invalid">
              Invaild password.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="validationCustom03" style={{"position" : "relative", "bottom" : "5px"}}>
          <Form.Label className='form_title'>Skills</Form.Label>
          <Form.Control type="text" placeholder="Skils..." required />
          <Form.Control.Feedback type="invalid">
            Please provide your Skills.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="6" controlId="validationCustom04" style={{"position" : "relative", "bottom" : "4px"}}>
          <Form.Label className='form_title'>Update Skills</Form.Label>
          <Form.Control type="text" placeholder="Update skills..." required />
          <Form.Control.Feedback type="invalid">
            Please provide your new skills.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="6" controlId="validationCustom04">
          <Form.Label className='form_title'>Experience</Form.Label>
          <Form.Control type="number" placeholder="Experience..." required />
          <Form.Control.Feedback type="invalid">
            Experince should in numbers.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="6" controlId="validationCustom05">
          <Form.Label className='form_title'>Mobile</Form.Label>
          <Form.Control type="number" placeholder="Enter a mobile number" required />
          <Form.Control.Feedback type="invalid">
            Please enter a valid mobile number.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="6" controlId="validationCustom05">
          <Form.Label className='form_title'>Alertnative Mobile</Form.Label>
          <Form.Control type="number" placeholder="Alternative mobile number" />
          <Form.Control.Feedback type="invalid">
          Please enter a valid mobile number.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="6" controlId="validationCustom05">
          <Form.Label className='form_title'>Address</Form.Label>
          <Form.Control className='form-control' type="text" placeholder="Enter your address" required />
          <Form.Control.Feedback type="invalid">
            Please enter your address.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="6" controlId="validationCustom05">
          <Form.Label className='form_title'>Alertnative Address</Form.Label>
          <Form.Control type="text" placeholder="Alternative address" />
          <Form.Control.Feedback type="invalid">
          Please enter your address.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Button type="submit" className='update_button'>Update</Button>
    </Form>
  );
}

export default UpdateProfile;