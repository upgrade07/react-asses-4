import React from 'react'
import {Table} from 'react-bootstrap'
const Students = () => {

  const students =
  [
  {Name : "Sahil" , Lastname :"Khotkar" , Username:'sahilkasasda'},
  {Name : "Ritesh" , Lastname :"Salunkhe" , Username:'dsarwwa'},
  {Name : "Devansh" , Lastname :"Dixit" , Username:'adsajra'},
  {Name : "Sushant" , Lastname :"Tare" , Username:'sasdsa'},
  {Name : "Atharva" , Lastname :"Nerurkar" , Username:'athraea'}
  ]
  return (
    <>
    <Table striped bordered hover size="sm">
  <thead>
  <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Username</th>
    </tr>
   
    
  </thead>
  
  <tbody>
    <tr>
      <td>1</td>
      <td>{students[0].Name}</td>
      <td>{students[0].Lastname}</td>
      <td>@{students[0].Username}</td>
    </tr>
    <tr>
      <td>2</td>
      <td>{students[1].Name}</td>
      <td>{students[1].Lastname}</td>
      <td>@{students[1].Username}</td>
    </tr>
    <tr>
      <td>3</td>
      <td>{students[2].Name}</td>
      <td>{students[2].Lastname}</td>
      <td>@{students[2].Lastname}</td>
    </tr>
    <tr>
      <td>4</td>
      <td>{students[3].Name}</td>
      <td>{students[3].Lastname}</td>
      <td>@{students[3].Username}</td>
    </tr>
    <tr>
      <td>5</td>
      <td>{students[4].Name}</td>
      <td>{students[4].Lastname}</td>
      <td>@{students[4].Username}</td>
    </tr>
  </tbody>
</Table>
</>
  )
}

export default Students