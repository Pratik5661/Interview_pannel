import React from 'react';
import { Row, Col } from 'react-bootstrap';
import SideNav from './Shared/SideNav';
import { Outlet, useNavigate } from "react-router-dom";

const Layout = () => {
   
    return (
        <Row style={{ width: '100%' }}>
            <Col md={3}>
                <SideNav />
            </Col>
            <Col md={9}>
                <Outlet />
            </Col>
        </Row>
    )
}


export default Layout;