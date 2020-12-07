import React, { Component } from 'react'
import axios from 'axios'
class CreateCustomer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      customerName: '',
      customerAddress: ''
    }
  }

  onCustomerNameChange = e => {
    this.setState({ customerName: e.target.value })
  }

  onCustomerAddressChange = e => {
    this.setState({ customerAddress: e.target.value })
  }

  onSubmit = e => {
    console.log(`Customer name: ${this.state.customerName}`)
    console.log(`Customer address: ${this.state.customerAddress}`)

    const newCustomer = {
      customerName: this.state.customerName,
      customerAddress: this.state.customerAddress
    }

    axios
      .post('http://localhost:5000/add', newCustomer)
      .then(res => console.log(res.data))
      .catch(err => console.log('Error', err))

    this.setState({
      customerName: '',
      customerAddress: ''
    })
  }

  render() {
    return (
      <div style={{ marginTop: 20 }}>
        <h3>Create New Customer</h3>
        <form>
          <div className="form-group">
            <label>Customer Name</label>
            <input
              type="text"
              className="form-control"
              value={this.state.customerName}
              onChange={this.onCustomerNameChange}
            />
          </div>
          <div className="form-group">
            <label>Customer Address</label>
            <input
              type="text"
              className="form-control"
              value={this.state.customerAddress}
              onChange={this.onCustomerAddressChange}
            />
          </div>
        </form>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={this.onSubmit}
        >
          Submit
        </button>
      </div>
    )
  }
}

export default CreateCustomer
