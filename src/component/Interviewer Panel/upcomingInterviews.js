import {React, useState} from "react";
import TableCmp from "../Shared/Table";
import moment from 'moment';
import { useNavigate } from "react-router-dom";
import { MdEditNote } from 'react-icons/md'


let Upcoming_Interviews = () => {

    
  const [interviewers, setInterviewers] = useState([]);

  const navigate = useNavigate()
  const getinterviewLists = () => (
      {
        labels: ['S.no.', 'User Id', 'Name', 'Email', 'Skills', 'Date'],
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
        <>
        <TableCmp className='interviwer_table' tableData={getinterviewLists()} />
        
        </>
    )
}

export default Upcoming_Interviews