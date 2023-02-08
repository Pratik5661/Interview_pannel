import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import './style.scss'

const LoginWithGoogle = () => {

  return (
    <Container fluid className="d-flex h-100 " >
      <Row className="justify-content-center align-self-center w-100 login_container">
        <Col xs={10} sm={8} md={6} lg={4}>
          <div>
          <h1 className="text-center mb-3" style={{fontFamily: "nria Sans"}}>Create Your Account</h1>
          <p>Please note that phone verification is required for signup. Your number will only be used to verify your identity for security purposes.</p>
          </div>
          <div className="email_input">
            <input type='email' className="input_email" placeholder="Email address" />
            <Button className="btn_continue">continue</Button>
          </div>
          <Button
            block
            variant="danger"
            className="mb-3 btn_google"
            
          >
            Login with Google
          </Button>
          <p className="text-center account">
            Don't have an account?{" "}
            <a href="#" className="sing_up">Signup</a>
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginWithGoogle;