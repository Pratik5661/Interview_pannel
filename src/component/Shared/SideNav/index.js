import React from "react";
import { Row, Col, Nav } from 'react-bootstrap';
import { FaUserCircle} from 'react-icons/fa'
import {MdDashboard, MdPendingActions} from 'react-icons/md'
import {CgProfile} from 'react-icons/cg'
import {SiVirustotal} from 'react-icons/si'
import {GiSkills} from 'react-icons/gi'
import './style.scss';

const SideNav = () => {

    return (
        <Row className="sidenav">
            <Col md={12}>
                <div className="sidenav__avtar"><FaUserCircle /></div>

                <div className="sidenav__navs">
                    <Nav defaultActiveKey="/home" className="flex-column">
                        <Nav.Link href="/admin/dashboard">
                            <MdDashboard /> Dashboard
                        </Nav.Link>
                        <Nav.Link eventKey="link-1" href="/admin/update_profile">
                            <CgProfile />Update Profile</Nav.Link>
                        <Nav.Link eventKey="link-2"  href="/admin/total_Interview">
                            <SiVirustotal /> Total Inteview
                        </Nav.Link>
                        <Nav.Link eventKey="link-2" href="/admin/interviewer">
                            <MdPendingActions /> Interviewer
                        </Nav.Link>
                        <Nav.Link eventKey="link-2">
                            <GiSkills /> Skills
                        </Nav.Link>
                    </Nav>
                </div>
            </Col>
        </Row>
    )
}

export default SideNav