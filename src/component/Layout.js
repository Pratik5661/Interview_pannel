import React from 'react';
import { Row, Col } from 'react-bootstrap';
import SideNav from './Shared/SideNav';
import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <Row>
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