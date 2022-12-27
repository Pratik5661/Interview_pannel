import React from "react";
import { Row, Col, Nav } from 'react-bootstrap';
import { FaUserCircle, FaRegUser } from 'react-icons/fa'
import './style.scss';

const SideNav = () => {

    return (
        <Row className="sidenav">
            <Col md={12}>
                <div className="sidenav__avtar"><FaUserCircle /></div>

                <div className="sidenav__navs">
                    <Nav defaultActiveKey="/home" className="flex-column">
                        <Nav.Link href="/home">
                            <FaUserCircle /> Dashboard
                        </Nav.Link>
                        <Nav.Link eventKey="link-1">
                            <FaUserCircle />Profile</Nav.Link>
                        <Nav.Link eventKey="link-2">
                            <FaUserCircle /> Total Inteview
                        </Nav.Link>
                        <Nav.Link eventKey="link-2">
                            <FaUserCircle /> Pending Inteview
                        </Nav.Link>
                    </Nav>
                </div>
            </Col>
        </Row>
    )
}

export default SideNav