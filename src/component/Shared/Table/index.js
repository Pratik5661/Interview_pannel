import React from "react";
import { Table } from "react-bootstrap";

const TableCmp = ({ tableData = {} }) => {
  return (
    <>
      <Table bordered hover variant='light' className='table table-striped'>
        <thead>
          <tr>
            {
              (tableData.labels || []).map(th => (
                <th>{th}</th>
              ))
            }
          </tr>
        </thead>
        <tbody>
          {
            (tableData.colData || []).map(tr => (
              <tr key={tr.key}>
                {
                  Object.keys(tr.colData).map(td => (
                    <td>{tr.colData[td]}</td>
                  ))
                }
              </tr>
            ))
          }
        </tbody>
      </Table>
    </>
  )
}

export default TableCmp