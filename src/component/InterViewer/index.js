import React, { useCallback, useEffect, useState } from "react";
import TableCmp from "../Shared/Table";
import { Row, Col, Button } from "react-bootstrap";
import { axiosObject } from '../Shared/Api';
import { MdEditNote } from 'react-icons/md'
import moment from 'moment';
import {IoAdd} from 'react-icons/io5'
import { useNavigate, Link } from "react-router-dom";
import './style.scss'

let InterViewer = () => {
  const [interviewers, setInterviewers] = useState([]);
  const navigate = useNavigate();
  
  const getInterviewers = useCallback(async () => {
    try {
      const params = {
        role: 'Interviewer'
      }
      const response = await axiosObject.get('getUsers', { params });
      if (response.data.status === 'success') {
        setInterviewers(response.data.data)
      } else {
        setInterviewers([]);
      }
    } catch (err) {
      console.error(getInterviewers.name, err.message);
    }
  }, [])

  useEffect(() => {
    getInterviewers();
  }, [getInterviewers])


  const getTableData = () => (
    {
      labels: ['S.no.', 'User Id', 'Name', 'Email', 'Skills', 'Register Date', 'Edit'],
      colData: interviewers.map((data, index) => (
        {
          key: index,
          colData: {
            index: index + 1,
            userId: data.id,
            name: data.fullName,
            email: data.email,
            skills: (data.skills || '').join(', '),
            date: moment(data.createdAt).format('DD-MM-yyyy hh:mm A'),
            exit: (<MdEditNote onClick={()=>navigate('/profile')} />)
          }
        }
      ))
    }
  )

  return (
    <Row className='mt-3'>
      <Col md={12}>
        <h3 className="mb-3">Interviewers List</h3>
        <Button className="add_interviwer"><Link to='/add_candidate' className="add_candidate"><IoAdd /> Add Interviewer</Link></Button>
        <TableCmp className='interviwer_table' tableData={getTableData()} />
      </Col>
    </Row>

  )
}

export default InterViewer