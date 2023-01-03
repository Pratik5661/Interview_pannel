import Form from 'react-bootstrap/Form';
import "./style.scss"
const SelectBox = ({options})=> {
    return (
      <Form.Select aria-label="Default select example" className='selectBox' style={{width: '21rem'}}>
        {
            (options || []).map(option=>(
                <option value={option.value}>{option.text}</option>
            ))
        }
      </Form.Select>
    );
  }
  
  export default SelectBox;