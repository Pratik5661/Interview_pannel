import React from "react";
import { Row, Col } from "react-bootstrap";
import '../Login/style.scss'

let ForgetPassword = () =>{
    return (
        <>
        <Row className='forget_password' style={{"margin" : "0%"}}>

        <Col md={12}>
        <div className='email_input'>
            <input type='email' id="" className='login__text' placeholder="Enter your email" />
            <br />
            <button type="submit" className='login__btn'>Next</button>
        </div>
        </Col>
        </Row>
        </>
    )
}

export default ForgetPassword