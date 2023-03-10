import React, { useCallback, useEffect, useState } from "react";
import TableCmp from "../Shared/Table";
import { Row, Col, Button } from "react-bootstrap";
import { axiosObject } from '../Shared/Api';
import { MdEditNote } from 'react-icons/md'
import { IoAdd } from 'react-icons/io5'
import moment from 'moment';
import { useNavigate } from "react-router-dom";

let TotalInterview = () => {
  const [interviews, setInterviews] = useState([]);
  const navigate = useNavigate();

  const getInterviews = useCallback(async () => {
    try {
      const response = await axiosObject.get('interviews');
      if (response.data.success) {
        setInterviews(response.data.interviews || [])
      } else {
        setInterviews([]);
      }
    } catch (err) {
      console.error(getInterviews.name, err.message);
    }
  }, [])

  useEffect(() => {
    getInterviews();
  }, [getInterviews])


  const getTableData = () => (
    {
      labels: ['S.no.', 'Date', 'Start Time', 'Interview Type', 'Duration', 'Candidate', 'Interviewer', 'Skills'],
      colData: interviews.map((data, index) => (
        {
          key: index,
          colData: {
            sno: index + 1,
            date: moment(data.scheduleDate).format('DD-MM-YYYY'),
            time: data.startTime,
            type: data.interviewType,
            duration: `${data.duration} Min`,
            candidate: data.candidate.fullName,
            interviewer: data.interviewer.fullName,
            skills: data.skills.join(', ')
          }
        }
      ))
    }
  )

  return (
    <Row className='mt-3'>
      <Col md={12}>
        <h3 className="mb-3">Interviews List</h3>
        <Button className="add_interviwer" onClick={() => navigate('/schedule_interview')}> <IoAdd /> Schedule Interview</Button>
        <TableCmp tableData={getTableData()} />
      </Col>
    </Row>

  )
}

export default TotalInterview