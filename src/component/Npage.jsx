import React from 'react'
import { Link } from 'react-router-dom'

const Npage = () => {
  return (
    <div className="card w-25" >
 
  <div className="card-body">
    <h5 className="card-title">404</h5>
    <p className="card-text">Page Not Found</p>
    <Link to="/" className="btn btn-primary">Go back</Link>
  </div>
</div>
  )
}

export default Npage
