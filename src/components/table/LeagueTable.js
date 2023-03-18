import React from 'react'
import Table from 'react-bootstrap/Table';
import data from "../mockData/tableMock"
import './style/LeagueTable.css'
import logo from './images/premierLeagueLogo.png'


function LeagueTable() {
  let i = 0
  const DisplayTableData=data.map(
    (info)=>{
      i+=1
      return i < 10 ? (
        <tr>
              <td><span className='colorBar'>i</span>{i} &nbsp;&nbsp;&nbsp;{info.Club}</td>
              <td>{info.Pts}</td>
              <td>{info.GD}</td>
              <td>{info.GA}</td>
              <td>{info.GF}</td>
              <td>{info.L}</td>
              <td>{info.D}</td>
              <td>{info.W}</td>
              <td>{info.MP}</td>
            </tr>
      
  ):
  (
    <tr>
          <td><span className='colorBar'>i</span>{i} &nbsp;{info.Club}</td>
          <td>{info.Pts}</td>
          <td>{info.GD}</td>
          <td>{info.GA}</td>
          <td>{info.GF}</td>
          <td>{info.L}</td>
          <td>{info.D}</td>
          <td>{info.W}</td>
          <td>{info.MP}</td>
        </tr>
  
)

})
        
  return (
    <>
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
        </>
  )
}


export default LeagueTable;