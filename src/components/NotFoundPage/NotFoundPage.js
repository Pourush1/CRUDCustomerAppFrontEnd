import React from 'react'
import { Link } from 'react-router-dom'

class NotFoundPage extends React.Component {
  render() {
    return (
      <div className="text-center">
        <p className="mt-5">
          <Link to="/">Go to Home </Link>
        </p>
        <p className="text-warning">Page Not Exists</p>
      </div>
    )
  }
}

export default NotFoundPage
