import Form from 'react-bootstrap/Form';

const SelectBox = ({options, name, onChange})=> {
    return (
      <Form.Select aria-label="Default select example" name={name} onChange={onChange} >
        {
            (options || []).map(option=>(
                <option value={option.value}>{option.text}</option>
            ))
        }
      </Form.Select>
    );
  }
  
  export default SelectBox;