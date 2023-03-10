import React from "react";
import { Table } from "react-bootstrap";
import {MdEditNote} from 'react-icons/md'
const TableCmp = () => {
    return (
    <>
    <Table  bordered hover variant='light' className='table table-striped'>
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
          <th>Edit</th>
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
          <td><MdEditNote /></td>
        </tr>
        <tr>
        <td>2</td>
          <td>Pratik</td>
          <td>Chaudhary</td>
          <td>React</td>
          <td>ABC</td>
          <td>1-1-2023</td>
          <td className='text-success'>Approve</td>
          <td>Clear</td>
          <td><MdEditNote /></td>
        </tr>
        <tr>
        <td>3</td>
          <td>Pratik</td>
          <td>Chaudhary</td>
          <td>React</td>
          <td>ABC</td>
          <td>1-1-2023</td>
          <td className='text-danger'>Pending</td>
          <td>Clear</td>  
          <td><MdEditNote /></td>
        </tr>
        <tr>
        <td>4</td>
          <td>Pratik</td>
          <td>Chaudhary</td>
          <td>React</td>
          <td>ABC</td>
          <td>1-1-2023</td>
          <td className='text-success'>Approve</td>
          <td>Clear</td> 
          <td><MdEditNote /></td>
        </tr>
        <tr>
        <td>5</td>
          <td>Pratik</td>
          <td>Chaudhary</td>
          <td>React</td>
          <td>ABC</td>
          <td>1-1-2023</td>
          <td className='text-danger'>Pending</td>
          <td>Clear</td>
          <td><MdEditNote /></td>
        </tr>
        <tr>
        <td>6</td>
          <td>Pratik</td>
          <td>Chaudhary</td>
          <td>React</td>
          <td>ABC</td>
          <td>1-1-2023</td>
          <td className='text-danger'>Pending</td>
          <td>Clear</td>
          <td><MdEditNote /></td>
        </tr>
        <tr>
        <td>7</td>
          <td>Pratik</td>
          <td>Chaudhary</td>
          <td>React</td>
          <td>ABC</td>
          <td>1-1-2023</td>
          <td className='text-success'>Approve</td>
          <td>Clear</td>
          <td><MdEditNote /></td>
        </tr>
        <tr>
        <td>8</td>
          <td>Pratik</td>
          <td>Chaudhary</td>
          <td>React</td>
          <td>ABC</td>
          <td>1-1-2023</td>
          <td className='text-success'>Approve</td>
          <td>Clear</td>
          <td><MdEditNote /></td>
        </tr>
        <tr>
        <td>9</td>
          <td>Pratik</td>
          <td>Chaudhary</td>
          <td>React</td>
          <td>ABC</td>
          <td>1-1-2023</td>
          <td className='text-danger'>Pending</td>
          <td>Clear</td>
          <td><MdEditNote /></td>
        </tr>
        <tr>
        <td>10</td>
          <td>Pratik</td>
          <td>Chaudhary</td>
          <td>React</td>
          <td>ABC</td>
          <td>1-1-2023</td>
          <td className='text-success'>Approve</td>
          <td>Clear</td>
          <td><MdEditNote /></td>
        </tr>
      </tbody>
    </Table>
    </>
    )
}

export default  TableCmp