import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import DatePicker from './datePicker';
import './style.scss'


function Interview_Schedule() {
  return (
    <div>
        <h1>Interview Schedule</h1>
    <Card style={{ width: '30rem', height: '25rem' }} >

      <Card.Body  className='interview_schedule'>
        <Card.Title className='card_title'>Pick your time and Date</Card.Title>
      <div>
        <div className='date_picker'>
      <DatePicker /> 
            <div className='hours'>
                <p className='time'>Hours</p>
                <select>
                    <option value="1">01</option>
                    <option value="2">02</option>
                    <option value="3">03</option>
                    <option value="4">04</option>
                </select>
            </div>
            <div className='mint'>
            <p className='time'>Minutes</p>
                <select>
                    <option value="1">00</option>
                    <option value="2">15</option>
                    <option value="3">30</option>
                    <option value="4">45</option>
                </select>
            </div>
      </div>
        <div className='textarea'>
                <textarea rows="4" cols="50" placeholder='comment..'/> 
            </div>
      </div>
        <Card.Text>
         
        </Card.Text>
        <Button className='btn_submit'>Schedule</Button>
      </Card.Body>
    </Card>
    </div>
  );
}

export default Interview_Schedule;