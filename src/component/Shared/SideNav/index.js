import React from "react";
import { Row, Col, Nav } from 'react-bootstrap';
import { FaUserCircle} from 'react-icons/fa'
import {MdDashboard, MdPendingActions} from 'react-icons/md'
import {CgProfile} from 'react-icons/cg'
import {SiVirustotal} from 'react-icons/si'
import './style.scss';

const SideNav = () => {

    return (
        <Row className="sidenav">
            <Col md={12}>
                <div className="sidenav__avtar"><FaUserCircle /></div>

                <div className="sidenav__navs">
                    <Nav defaultActiveKey="/home" className="flex-column">
                        <Nav.Link href="/home">
                            <MdDashboard /> Dashboard
                        </Nav.Link>
                        <Nav.Link eventKey="link-1">
                            <CgProfile />Profile</Nav.Link>
                        <Nav.Link eventKey="link-2">
                            <SiVirustotal /> Total Inteview
                        </Nav.Link>
                        <Nav.Link eventKey="link-2">
                            <MdPendingActions /> Pending Inteview
                        </Nav.Link>
                    </Nav>
                {/* <aside>
                    Log Out
                </aside> */}
                </div>
            </Col>
        </Row>
    )
}

export default SideNav