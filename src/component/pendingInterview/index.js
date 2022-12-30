import React from "react";
import { Table } from "react-bootstrap";
import SelectBox from "../Shared/Select";
const Interviewer = ()=> {
    return (
        <>
    <SelectBox className='select' options={[{text:'Choose your role'},{text:'Interviewer'},{text:'Developer'}]} />
        <Table  bordered hover variant='light' className='table my-5 table-striped'>
        <thead>
          <tr>
            <th>S.no</th>
            <th>Name</th>
            <th>Skills</th>
            <th>InterviewerName </th>
            <th>Date</th>
            <th>Timing</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Pratik</td>
            <td>Chaudhary</td>
            <td>React</td>
            <td>ABC</td>
            <td>1-1-2023</td>
            <td className='text-danger'>Pending</td>
            <td>Clear</td>
          </tr>
          <tr>
          <td>2</td>
            <td>Pratik</td>
            <td>Chaudhary</td>
            <td>React</td>
            <td>ABC</td>
            <td>1-1-2023</td>
            <td>Pending</td>
            <td>Clear</td>
          </tr>
          <tr>
          <td>3</td>
            <td>Pratik</td>
            <td>Chaudhary</td>
            <td>React</td>
            <td>ABC</td>
            <td>1-1-2023</td>
            <td>Pending</td>
            <td>Clear</td>  
          </tr>
          <tr>
          <td>4</td>
            <td>Pratik</td>
            <td>Chaudhary</td>
            <td>React</td>
            <td>ABC</td>
            <td>1-1-2023</td>
            <td>Pending</td>
            <td>Clear</td>  
          </tr>
          <tr>
          <td>5</td>
            <td>Pratik</td>
            <td>Chaudhary</td>
            <td>React</td>
            <td>ABC</td>
            <td>1-1-2023</td>
            <td>Pending</td>
            <td>Clear</td>  
          </tr>
        </tbody>
      </Table>
      </>
    )
}
export default Interviewer