import React, { Component } from 'react'
import  axios  from 'axios'
import Table  from 'react-bootstrap/Table';
import StudentTableRow from './StudentTableRow'
export default class StudentList extends Component {
// eslint-disable-next-line no-useless-constructor
constructor(props) {
super(props)
this.state={
  students:[]
}

}
componentDidMount()
{
  const url="http://localhost:4000/students";
  axios.get(url).then(res=>{
    this.setState({
      students:res.data
    })
  }).catch(err=>console.log(err))
}
Datatable()
{
  return this.state.students.map((res,i)=>
  {
    return <StudentTableRow obj={res} key={i}></StudentTableRow>
  }
  );
}

  render() {
    return (
      <div className="table-wrapper">
<Table striped bordered hover>
<thead>
  <tr>
    <th>Nom</th>
    <th>email</th>
    <th>Rollno</th>
    <th>Action</th>
  </tr>
</thead>
<tbody>
  {this.Datatable()}
</tbody>
</Table>


      </div>
    )
  }
}
