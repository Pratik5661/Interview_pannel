import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { FaUsers, FaBookOpen, FaUserAlt } from "react-icons/fa";
import './style.scss';

const DeveloperPanel = () => {
    return (
        <Row className='adminPanel mt-3 justify-content-center'>
            <Col sm={12} className="d-flex justify-content-center">
                <div className='adminPanel__heading'>ADMIN PANNEL</div>
            </Col>
            <Col sm={12} className="mt-4">
                <Row className='adminPanel__container'>
                    <Col sm={3} className="adminPanel__box">
                        <div>
                            <div className='d-flex'>
                                <FaUsers />
                                <div className='adminPanel__box__text'>Total Developers</div>
                            </div>
                            <div className='adminPanel__box__text adminPanel__box__count'>123</div>
                        </div>
                    </Col>
                    <Col sm={3} className="adminPanel__box">
                        <div>
                            <div className='d-flex'>
                                <FaBookOpen />
                                <div className='adminPanel__box__text'>Total Resume</div>
                            </div>
                            <div className='adminPanel__box__text adminPanel__box__count'>123</div>
                        </div>
                    </Col>
                     <Col sm={3} className="adminPanel__box">
                        <div>
                            <div className='d-flex'>
                                <FaUsers />
                                <div className='adminPanel__box__text'>Total Candidates</div>
                            </div>
                            <div className='adminPanel__box__text adminPanel__box__count'>150</div>
                        </div>
                    </Col>
                </Row>

                <Row className='adminPanel__container mt-3'>
                    <Col sm={3} className="adminPanel__box">
                        <div>
                            <div className='d-flex'>
                                <FaUserAlt />
                                <div className='adminPanel__box__text'>Total Profiles</div>
                            </div>
                            <div className='adminPanel__box__text adminPanel__box__count'>120</div>
                        </div>
                    </Col>
                    <Col sm={3} className="adminPanel__box">
                        <div>
                            <div className='d-flex'>
                                <FaBookOpen />
                                <div className='adminPanel__box__text'>Total Pending Interviews</div>
                            </div>
                            <div className='adminPanel__box__text adminPanel__box__count'>123</div>
                        </div>
                    </Col>
                     <Col sm={3} className="adminPanel__box">
                        <div>
                            <div className='d-flex'>
                                <FaUsers />
                                <div className='adminPanel__box__text'>Total Interviews</div>
                            </div>
                            <div className='adminPanel__box__text adminPanel__box__count'>150</div>
                        </div>
                    </Col>
                </Row>

                <Row className='adminPanel__container mt-3'>
                    <Col sm={3} className="adminPanel__box">
                        <div>
                            <div className='d-flex'>
                                <FaUserAlt />
                                <div className='adminPanel__box__text'>Total Profiles</div>
                            </div>
                            <div className='adminPanel__box__text adminPanel__box__count'>120</div>
                        </div>
                    </Col>
                    <Col sm={3} className="adminPanel__box">
                        <div>
                            <div className='d-flex'>
                                <FaBookOpen />
                                <div className='adminPanel__box__text'>Total Pending Interviews</div>
                            </div>
                            <div className='adminPanel__box__text adminPanel__box__count'>123</div>
                        </div>
                    </Col>
                     <Col sm={3} className="adminPanel__box">
                        <div>
                            <div className='d-flex'>
                                <FaUsers />
                                <div className='adminPanel__box__text'>Total Interviews</div>
                            </div>
                            <div className='adminPanel__box__text adminPanel__box__count'>150</div>
                        </div>
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}


export default DeveloperPanel;