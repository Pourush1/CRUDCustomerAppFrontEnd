import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

class Customer extends React.Component {
  constructor(props) {
    super(props)
  }

  deleteCustomer = id => {
    axios
      .delete('http://localhost:5000/delete/' + id)
      .then(response => {
        console.log('Customer successfully deleted!')
      })
      .catch(function(error) {
        console.log(error)
      })
  }

  render() {
    const { customerName, customerAddress, _id } = this.props.customer
    return (
      <tr>
        <td>{customerName}</td>
        <td>{customerAddress}</td>
        <td>
          <Link to={'/' + _id}>Edit</Link>
        </td>
        <td>
          <button
            type="button"
            className="btn btn-link"
            onClick={() => this.deleteCustomer(_id)}
          >
            Delete
          </button>
        </td>
      </tr>
    )
  }
}

export default Customer
