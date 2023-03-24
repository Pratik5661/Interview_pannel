import React, { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TableCmp from "../Shared/Table";
import { Row, Col, Button } from "react-bootstrap";
import { axiosObject, api } from '../Shared/Api';
import { MdEditNote, MdRemoveRedEye } from 'react-icons/md'
import {IoAdd} from 'react-icons/io5'
import moment from 'moment';
import { useNavigate } from "react-router-dom";

let Developer_Panel = () => {
  const [developers, setDevelopers] = useState([]);
  const navigate = useNavigate();

  const getDevelopers = useCallback(async () => {
    try {
      const params = {
        role: 'Developer'
      }
      const response = await axiosObject.get('getUsers', { params });
      if (response.data.status === 'success') {
        setDevelopers(response.data.data)
      } else {
        setDevelopers([]);
      }
    } catch (err) {
      console.error(getDevelopers.name, err.message);
    }
  }, [])

  useEffect(() => {
    getDevelopers();
  }, [getDevelopers])


  const getTableData = () => (
    {
      labels: ['S.no.', 'User Id', 'Name', 'Email', 'Skills', 'Register Date', 'Resume', 'Edit'],
      colData: developers.map((data, index) => (
        {
          key: index,
          colData: {
            index: index + 1,
            userId: data.id,
            name: data.fullName,
            email: data.email,
            skills: (data.skills || '').join(', '),
            date: moment(data.createdAt).format('DD-MM-yyyy hh:mm A'),
            resume: (<MdRemoveRedEye onClick={()=> window.open(`${api.serverBaseUrl}/resume/${data.resume}`,'_blank')}/>),
            edit: (<MdEditNote onClick={()=>navigate('/profile')} />)
          }
        }
      ))
    }
  )

  return (
    <Row className='mt-3'>
      <Col md={12}>
        <h3 className="mb-3">Developers List</h3>
        <Button className="add_interviwer"><Link to='/add_candidate' className="add_candidate"><IoAdd />Add Candidate</Link></Button>
        <TableCmp tableData={getTableData()} />
      </Col>
    </Row>

  )
}

export default Developer_Panel