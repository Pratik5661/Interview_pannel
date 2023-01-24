import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import DatePicker from './datePicker';
import './style.scss'


function Interview_Schedule() {
  return (
    <div className='main'>
        <h1 className='heading'>Interview Schedule</h1>
    <Card style={{ width: '30rem', height: '25rem' }} >

      <Card.Body  className='interview_schedule'>
        <Card.Title className='card_title'>Pick your time and Date</Card.Title>
      <div>
        <div className='date_picker'>
            <p className='date'>Date</p>
      <DatePicker /> 
            <div className='hours'>
                <p className='time'>Hours</p>
                <select>
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
                <select>
                    <option value="1">00</option>
                    <option value="2">15</option>
                    <option value="3">30</option>
                    <option value="4">45</option>
                    <option value="4">60</option>
                </select>
            </div>
      </div>
        <div className='textarea'>
            <p className='message'>Enter your message :</p>
                <textarea rows="4" cols="50" placeholder='message...'/> 
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