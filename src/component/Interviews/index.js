import { Row, Col } from 'react-bootstrap';
import TableCmp from '../Shared/Table';
import SelectBox from "../../component/Shared/Select";
import './style.scss'

function TotalInterview() {
  return (
    <Row className='mt-3'>
      <Col md={12}>
        <Row className='mb-3'>
          <Col sm={12} md={3}>
            <SelectBox className='select' options={[{ text: 'Select' }, { text: 'All' }, { text: 'Pending' }, { text: "Approve" }]} />
          </Col>
        </Row>
        <TableCmp />
      </Col>
    </Row>
  );
}

export default TotalInterview;