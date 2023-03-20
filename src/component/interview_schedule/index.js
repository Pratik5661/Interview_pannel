import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import DatePicker from './datePicker';
<<<<<<< HEAD
import {Row, Col} from 'react-bootstrap'
import ResponsiveTimePickers from './timePicker';
=======
import { Row, Col } from 'react-bootstrap'

>>>>>>> fa2ecb6c7bb5ca36a3ef8eec769c2a3a3c8b882d
import './style.scss'

function Interview_Schedule() {
  return (
    <Row>
      <Col md={15} sm={15}>
        <div className='main'>
          <h1 className='heading'>Interview Schedule</h1>
          <Card style={{ width: '30rem', height: '25rem' }} >

            <Card.Body className='interview_schedule'>
              <Card.Title className='card_title'>Pick your time and Date</Card.Title>
              <div>
                <div className='date_picker'>
                  <p className='date'>Date</p>
                  <DatePicker />
                  <div className='hours'>
                    <p className='time'>Hours</p>
                    <select className='selcet_tag'>
                      <option value="1">01</option>
                      <option value="2">02</option>
                      <option value="3">03</option>
                      <option value="4">04</option>
                      <option value="4">05</option>
                      <option value="4">06</option>
                      <option value="4">07</option>
                      <option value="4">08</option>
                      <option value="4">09</option>
                      <option value="4">10</option>
                      <option value="4">11</option>
                      <option value="4">12</option>
                    </select>
                  </div>
                  <div className='mint'>
                    <p className='time'>Minutes</p>
                    <select className='select_tag_timing'>
                      <option value="1">00</option>
                      <option value="2">15</option>
                      <option value="3">30</option>
                      <option value="4">45</option>
                      <option value="4">60</option>
                    </select>
                  </div>
                </div>
                <div className='textarea'>
                  <p className='message'>Enter Your Message :</p>
                  <textarea rows="4" cols="50" placeholder='Message...' />
                </div>
              </div>
              <Card.Text>

              </Card.Text>
              <Button className='btn_submit'>Schedule</Button>
            </Card.Body>
          </Card>
        </div>
      </Col>
    </Row>
  );
}

export default Interview_Schedule;