import React from "react";
import { Row, Col } from 'react-bootstrap';
import TableCmp from '../../component/Shared/Table/index';
import SelectBox from "../Shared/Select";
const Interviewer = () => {
  return (
    <Row className='mt-4'>
      <Col md={12}>
      <Row className='mb-3'>
          <Col sm={12} md={3}>
            <SelectBox className='select' options={[{ text: 'Select' }, { text: 'All' }, { text: 'Pending' }, { text: "Approve" }]} />
          </Col>
        </Row>
        <TableCmp />
      </Col>
    </Row>
  )
}
export default Interviewer