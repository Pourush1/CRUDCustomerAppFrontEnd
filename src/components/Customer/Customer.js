import React from 'react'
import { Link } from 'react-router-dom'

const Customer = ({ customer, index }) => {
  return (
    <tr>
      <td>{customer.customerName}</td>
      <td>{customer.customerAddress}</td>
      <td>
        <Link to={'/' + customer._id}>Edit</Link>
      </td>
    </tr>
  )
}

export default Customer
