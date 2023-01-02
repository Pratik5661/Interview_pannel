import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Nav } from 'react-bootstrap';
import { FaUserCircle } from 'react-icons/fa'
import { MdDashboard, MdPendingActions } from 'react-icons/md'
import { CgProfile } from 'react-icons/cg'
import { SiVirustotal } from 'react-icons/si'
import { GiSkills } from 'react-icons/gi'
import image from "../../../assets/React-icon.svg.png";

import './style.scss';

const SideNav = () => {
    const [isNotActive, setNotActive] = useState(true);
    var barsIcon = <i className="fas fa-bars"></i>
    var crossIcon = <i className="fas fa-times-circle"></i>
    return (
        <div>
            <div className={isNotActive ? "wrapper"  : "inactive wrapper"}>
                <nav id="sidebar" className={isNotActive ? "active" : ""}>
                    <button
                        type="button"
                        onClick={() => setNotActive(!isNotActive)}
                        className="btn btn-custom"
                    >
                        <span className={isNotActive ? '' : 'hidden'}>{barsIcon}</span>
                        <span className={isNotActive ? 'hidden' : ''}>{crossIcon}</span>
                    </button>
                    <div className="sidebar-header">
                        <FaUserCircle />
                    </div>

                    <ul className="list-unstyled components">
                        <li className="list-item">
                            <MdDashboard />
                            <Link to="/admin/dashboard">Dashboard</Link>
                        </li>
                        <li className="list-item">
                            <SiVirustotal />
                            <Link to="/admin/total_Interview">Interviews</Link>
                        </li>
                        <li className="list-item">
                            <MdPendingActions />
                            <Link to="/admin/interviewer">Interviewer</Link>
                        </li>
                        <li className="list-item">
                            <GiSkills />
                            <Link to="/organization-profile">Skills</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
        // <Row className="sidenav">
        //     <Col md={12}>
        //         <div className="sidenav__avtar"><FaUserCircle /></div>

        //         <div className="sidenav__navs">
        //             <Nav defaultActiveKey="/home" className="flex-column">
        //                 <Nav.Link href="/admin/dashboard">
        //                     <MdDashboard /> Dashboard
        //                 </Nav.Link>
        //                 <Nav.Link eventKey="link-1" href="/admin/update_profile">
        //                     <CgProfile />Update Profile</Nav.Link>
        //                 <Nav.Link eventKey="link-2"  href="/admin/total_Interview">
        //                     <SiVirustotal /> Total Inteview
        //                 </Nav.Link>
        //                 <Nav.Link eventKey="link-2" href="/admin/interviewer">
        //                     <MdPendingActions /> Interviewer
        //                 </Nav.Link>
        //                 <Nav.Link eventKey="link-2">
        //                     <GiSkills /> Skills
        //                 </Nav.Link>
        //             </Nav>
        //         </div>
        //     </Col>
        // </Row>
    )
}

export default SideNav