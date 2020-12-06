import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import CustomerList from '../../components/CustomerList/CustomerList'
import CreateCustomer from '../../components/CreateCustomer/CreateCustomer'

const HomePage = () => {
  return (
    <Router>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link to="/" className="navbar-brand">
            Customers Info App
          </Link>
          <div className="collpase navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="navbar-item">
                <Link to="/" className="nav-link">
                  Customers
                </Link>
              </li>
              <li className="navbar-item">
                <Link to="/create" className="nav-link">
                  Create Customer
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <br />
        <Route exact path="/" component={CustomerList} />
        <Route exact path="/create" component={CreateCustomer} />
      </div>
    </Router>
  )
}

export default HomePage
