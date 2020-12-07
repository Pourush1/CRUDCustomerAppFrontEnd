import React, { Component } from 'react'
import axios from 'axios'
class EditCustomer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      customerName: '',
      customerAddress: ''
    }
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/' + this.props.match.params.id)
      .then(response => {
        this.setState({
          customerName: response.data.customerName,
          customerAddress: response.data.customerAddress
        })
      })
      .catch(function(error) {
        console.log(error)
      })
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

    const customer = {
      customerName: this.state.customerName,
      customerAddress: this.state.customerAddress
    }

    axios
      .post('http://localhost:5000/' + this.props.match.params.id, customer)
      .then(res => console.log(res.data))
      .catch(err => console.log('Error', err))

    this.props.history.push('/')
  }

  render() {
    return (
      <div>
        <h3>Update Customer</h3>
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

export default EditCustomer
