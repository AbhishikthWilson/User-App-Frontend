import React from 'react'
import { Link } from 'react-router-dom'

const UserLogin = () => {
  return (
    <div>

    <div className="container">
        <div className="row">
            <div  className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                
            <div className='ul'>     
                <center><h4>User Login</h4></center>
            <div className="row g-3">
               
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-label">User Name</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-label">Password</label>
                        <input type="text" className="form-control" />
                        
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <button className="btn btn-success">Submit</button>
                    </div>
                   
                </div>
                <br />
                <p>Don't have an account?</p>
                <Link to='/signup'>Signup</Link>
                
            </div>
                
            </div>
        </div>
    </div>

    </div>
  )
}

export default UserLogin