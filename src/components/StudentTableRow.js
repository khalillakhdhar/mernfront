import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import  Button  from 'react-bootstrap/Button';

export default class StudentTableRow extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props)
  {
    super(props);
    
  }
  
    render() {
    return (
      <tr>
        <td>{this.props.obj.name}</td>
        <td>{this.props.obj.email}</td>
        <td>{this.props.obj.rollno}</td>
        <td>
            <Link to={'/edit-student/'}>Edit</Link>
        </td>
        <td>
            <Button size="sm" variant="danger">delete</Button>
        </td>
      </tr>
    )
  }
}
