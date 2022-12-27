import Form from 'react-bootstrap/Form';

const SelectBox = ({options})=> {
    return (
      <Form.Select aria-label="Default select example">
        {
            (options || []).map(option=>(
                <option value={option.value}>{option.text}</option>
            ))
        }
      </Form.Select>
    );
  }
  
  export default SelectBox;