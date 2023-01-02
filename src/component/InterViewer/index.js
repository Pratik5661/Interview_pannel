import React from "react";
import { Row, Col } from 'react-bootstrap';
import TableCmp from '../../component/Shared/Table/index';

const Interviewer = () => {
  return (
    <Row className='mt-4'>
      <Col md={12}>
        <TableCmp />
      </Col>
    </Row>
  )
}
export default Interviewer