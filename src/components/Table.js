import React from "react";
import {Table} from 'react-bootstrap'





    export default props => (
    <Table striped bordered hover>
    <thead>
     <tr>
       <th>num</th>
      <th onClick={props.onSort.bind(null, 'id')} >ID {props.sortField === 'id' ? <small>{props.sort}</small> : null}</th>
      <th onClick={props.onSort.bind(null, 'firstName')}>First Name {props.sortField === 'firstName' ? <small>{props.sort}</small> : null}</th>
      <th onClick={props.onSort.bind(null, 'lastName')}>Last Name {props.sortField === 'lastName' ? <small>{props.sort}</small> : null}</th>
      <th onClick={props.onSort.bind(null, 'email')}>e-mail {props.sortField === 'email' ? <small>{props.sort}</small> : null}</th>
      <th onClick={props.onSort.bind(null, 'country')}>country {props.sortField === 'country' ? <small>{props.sort}</small> : null}</th>
     </tr>
  </thead>
  <tbody>
      {
        props.data.map((item,index)=>(
          <tr key={item.id+item.country}>
            <td >{index+1}</td>
            <td >{item.id}</td>
            <td >{item.firstName}</td>
            <td>{item.lastName}</td>
            <td>{item.email}</td>
            <td>{item.country}</td>
        </tr> 
          
           
        )

        )
      }
  </tbody>
 </Table>
 )

