import React, { Component } from 'react'
import axios from 'axios'
import Customer from '../Customer/Customer'

class CustomerList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      customers: []
    }
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/customers')
      .then(res => {
        console.log(res)
        this.setState({ customers: res.data })
      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {
    const { customers } = this.state
    return (
      <div>
        <p>Customers Information</p>
        <table className="table table-striped" style={{ marginTop: 20 }}>
          <thead>
            <tr>
              <th>Customer Name</th>
              <th>Customer Address</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer, index) => {
              return <Customer key={index} customer={customer} />
            })}
          </tbody>
        </table>
      </div>
    )
  }
}

export default CustomerList
