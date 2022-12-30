import React from "react";
import SelectBox from "../Select";
import { Table } from "react-bootstrap";
// import '../Table/style.scss'
const TableCmp = () => {
    return (
    <>
    <SelectBox className='select' options={[{text:'Select'},{text:'All'},{text:'Pending'}, {text: "Approve"}]} />
    <Table  bordered hover variant='light' className='table my-5 table-striped'>
      <thead>
        <tr>
          <th>S.no</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Skills</th>
          <th>InterviewerName </th>
          <th>Date</th>
          <th>Status</th>
          <th>Feedback</th>
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
          <td className='text-success'>Approve</td>
          <td>Clear</td>
        </tr>
        <tr>
        <td>2</td>
          <td>Pratik</td>
          <td>Chaudhary</td>
          <td>React</td>
          <td>ABC</td>
          <td>1-1-2023</td>
          <td>Approve</td>
          <td>Clear</td>
        </tr>
        <tr>
        <td>3</td>
          <td>Pratik</td>
          <td>Chaudhary</td>
          <td>React</td>
          <td>ABC</td>
          <td>1-1-2023</td>
          <td>Approve</td>
          <td>Clear</td>  
        </tr>
        <tr>
        <td>4</td>
          <td>Pratik</td>
          <td>Chaudhary</td>
          <td>React</td>
          <td>ABC</td>
          <td>1-1-2023</td>
          <td>Approve</td>
          <td>Clear</td>  
        </tr>
        <tr>
        <td>5</td>
          <td>Pratik</td>
          <td>Chaudhary</td>
          <td>React</td>
          <td>ABC</td>
          <td>1-1-2023</td>
          <td>Approve</td>
          <td>Clear</td>  
        </tr>
      </tbody>
    </Table>
    </>
    )
}

export default  TableCmp