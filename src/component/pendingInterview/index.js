import React from "react";
import { Table } from "react-bootstrap";
import SelectBox from "../Shared/Select";
import {MdEditNote} from 'react-icons/md' 
const Interviewer = ()=> {
    return (
        <>
        <SelectBox className='select' options={[{text:'Select'},{text:'All'},{text:'Pending'}, {text: "Approve"}]} />
        <Table  bordered hover variant='light' className='table my-5 table-striped'>
        <thead>
          <tr>
            <th>S.no</th>
            <th>InterviewerName </th>
            <th>Skills</th>
            <th>Date</th>
            <th>Timing</th>
            <th>Status</th>
            <th>Feedback</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Pratik</td>
            <td>React</td>
            <td>1-1-2023</td>
            <td>12pm</td>
            <td className='text-success'>Approve</td>
            <td>Clear</td>
            <td><MdEditNote /></td>
          </tr>
          <tr>
          <td>2</td>
          <td>Pratik</td>
            <td>React</td>
            <td>1-1-2023</td>
            <td>12pm</td>
            <td className='text-success'>Approve</td>
            <td>Clear</td>
            <td><MdEditNote /></td>
          </tr>
          <tr>
          <td>3</td>
          <td>Pratik</td>
            <td>React</td>
            <td>1-1-2023</td>
            <td>12pm</td>
            <td className='text-danger'>Pending</td>
            <td>Clear</td>
            <td><MdEditNote /></td>
          </tr>
          <tr>
          <td>4</td>
          <td>Pratik</td>
            <td>React</td>
            <td>1-1-2023</td>
            <td>12pm</td>
            <td className='text-danger'>Pending</td>
            <td>Clear</td>
            <td><MdEditNote /></td>
          </tr>
          <tr>
          <td>5</td>
          <td>Pratik</td>
            <td>React</td>
            <td>1-1-2023</td>
            <td>12pm</td>
            <td className='text-success'>Approve</td>
            <td>Clear</td>
            <td><MdEditNote /></td>
          </tr>
        </tbody>
      </Table>
      </>
    )
}
export default Interviewer