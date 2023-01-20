import React, { useEffect, useState, useCallback } from 'react';
import { Row, Col } from 'react-bootstrap';
import { FaUsers, FaBookOpen, FaUserAlt } from "react-icons/fa";
import { axiosObject } from '../Shared/Api';
import './style.scss';

const DeveloperPanel = () => {
    const [dashboard, setDashboard] = useState({});

    const getDahsboardData = useCallback (async ()=>{
        try {
            const response = await axiosObject.get('getdashboard/data');
            if (response.data.status === 'success') {
                setDashboard(response.data.data);
            } else {
                setDashboard({});
            }
        } catch (err) {
            console.error(getDahsboardData.name, err);
        }
    },[]);

    useEffect(()=>{
        getDahsboardData()
    },[getDahsboardData]);

    console.log(dashboard,'pl')
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
                            <div className='adminPanel__box__text adminPanel__box__count'>{(dashboard.totalDevelopers || []).length>0 ? dashboard.totalDevelopers[0].total : 0}</div>
                        </div>
                    </Col>
                    <Col sm={3} className="adminPanel__box">
                        <div>
                            <div className='d-flex'>
                                <FaBookOpen />
                                <div className='adminPanel__box__text'>Total Resume</div>
                            </div>
                            <div className='adminPanel__box__text adminPanel__box__count'>{(dashboard.totalResume || []).length>0 ? dashboard.totalResume[0].total : 0}</div>
                        </div>
                    </Col>
                    <Col sm={3} className="adminPanel__box">
                        <div>
                            <div className='d-flex'>
                                <FaUsers />
                                <div className='adminPanel__box__text'>Total Candidates</div>
                            </div>
                            <div className='adminPanel__box__text adminPanel__box__count'>{(dashboard.totalDevelopers || []).length>0 ? dashboard.totalDevelopers[0].total : 0}</div>
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
                            <div className='adminPanel__box__text adminPanel__box__count'>{(dashboard.totalProfiles || []).length>0 ? dashboard.totalProfiles[0].total : 0}</div>
                        </div>
                    </Col>
                    <Col sm={3} className="adminPanel__box">
                        <div>
                            <div className='d-flex'>
                                <FaBookOpen />
                                <div className='adminPanel__box__text'>Total Interviewers</div>
                            </div>
                            <div className='adminPanel__box__text adminPanel__box__count'>{(dashboard.totalInterviewer || []).length>0 ? dashboard.totalInterviewer[0].total : 0}</div>
                        </div>
                    </Col>
                    <Col sm={3} className="adminPanel__box">
                        <div>
                            <div className='d-flex'>
                                <FaUsers />
                                <div className='adminPanel__box__text'>Total Interviews</div>
                            </div>
                            <div className='adminPanel__box__text adminPanel__box__count'>{(dashboard.totalInterviews || []).length>0 ? dashboard.totalInterviewer[0].total : 0}</div>
                        </div>
                    </Col>
                </Row>

                <Row className='adminPanel__container mt-3'>
                    <Col sm={3} className="adminPanel__box">
                        <div>
                            <div className='d-flex'>
                                <FaBookOpen />
                                <div className='adminPanel__box__text'>Total Pending Interviews</div>
                            </div>
                            <div className='adminPanel__box__text adminPanel__box__count'>{(dashboard.totalPendingInterviews || []).length>0 ? dashboard.totalInterviewer[0].total : 0}</div>
                        </div>
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}


export default DeveloperPanel;