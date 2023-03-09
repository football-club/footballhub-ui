import React from 'react'
import Table from 'react-bootstrap/Table';
import data from "../mockData/tableMock"


function LeagueTable() {
  const DisplayTableData=data.map(
    (info)=>{
      return(
        <tr>
              <td>{info.Club}</td>
              <td>{info.Pts}</td>
              <td>{info.GD}</td>
              <td>{info.GA}</td>
              <td>{info.GF}</td>
              <td>{info.L}</td>
              <td>{info.D}</td>
              <td>{info.W}</td>
              <td>{info.MP}</td>
            </tr>
      
  )})
        
  return (
    <Table striped>
          <thead>
            <tr>
              <th>Position</th>
              <th>Pts</th>
              <th>GD</th>
              <th>GA</th>
              <th>GF</th>
              <th>L</th>
              <th>D</th>
              <th>W</th>
              <th>MP</th>
            </tr>
          </thead>
          <tbody>
            
            {DisplayTableData}
            
          </tbody>
        </Table>
  )
}


export default LeagueTable;