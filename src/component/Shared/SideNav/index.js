import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { Row, Col, Nav } from 'react-bootstrap';
import { FaUserCircle } from 'react-icons/fa'
import { MdDashboard, MdPendingActions } from 'react-icons/md'
import { CgProfile } from 'react-icons/cg'
import { SiVirustotal } from 'react-icons/si'
import { GiSkills } from 'react-icons/gi'
import { AiFillSchedule } from 'react-icons/ai'
import {IoPeopleSharp} from 'react-icons/io5'

import './style.scss';

const SideNav = () => {
    const [isNotActive, setNotActive] = useState(true);
    const navigate = useNavigate();
    var barsIcon = <i className="fas fa-bars"></i>
    var crossIcon = <i className="fas fa-times-circle"></i>
    let user = localStorage.getItem('user');
    user = JSON.parse(user);
    console.log(user.role)

    const logout = () => {
        localStorage.clear();
        navigate('/login');
    }

    return (
        <div>
            <div className={isNotActive ? "wrapper" : "inactive wrapper"}>
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
                        {
                            user.role === 'Admin' && (
                                <>
                                    <li className="list-item">
                                        <MdDashboard />
                                        <Link to="/dashboard">Dashboard</Link>
                                    </li>
                                    <li className="list-item">
                                        <SiVirustotal />
                                        <Link to="/total_Interview">Interviews</Link>
                                    </li>
                                    <li className="list-item">
                                        <MdPendingActions />
                                        <Link to="/interviewer">Interviewer</Link>
                                    </li>
                                    <li className="list-item">
                                        <IoPeopleSharp />
                                        <Link to="/developer_panel">Developers</Link>
                                    </li>
                                    {/* <li className="list-item">
                                        <AiFillSchedule />
                                        <Link to="/interivew_schedule">Interview Schedule</Link>
                                    </li> */}
                                </>
                            )
                        }
                        {
                            user.role === "Developer" || user.role === "Interviewer" && (
                                <li className="list-item">
                                    <CgProfile />
                                    <Link to="/profile">Profile</Link>
                                </li>
                            )
                        }
                        <li className="list-item">
                            <AiFillSchedule />
                            <Link to="/booking">Interview <p className="schedule">Schedule</p></Link>
                        </li>
                        <li className="list-item" onClick={() => logout()}>
                            <GiSkills />
                            <Link>Logout</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default SideNav