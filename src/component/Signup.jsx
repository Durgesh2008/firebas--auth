import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {  createUserWithEmailAndPassword } from "firebase/auth";
import {auth } from './firebase'
import Alert from './Alert';

const Signup = () => {
  const navigate=useNavigate();
  const [Value, setValue] = useState({
    password: "", email: ''
  })

  const onchangef = (e) => {
    setValue({ ...Value, [e.target.name]: e.target.value })
  }

  const [error, seterror]=useState('');
  const handleSubmit=async(e)=>{
    e.preventDefault();
    seterror(" ")
    try {
      const success=await createUserWithEmailAndPassword(auth,Value.email,Value.password);
      if(success){
       navigate('/login')
      }
    } catch (err) {
      seterror(err.message);
    }
  }
  return (<>
    <form className='rounded-2 bg-secondary  p-5 w-50' onSubmit={handleSubmit}>
       { error ===''? "":<Alert msg={error}/>}
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label text-white">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='email' value={Value.email} onChange={onchangef}/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label text-white">Password</label>
    <input type="password" className="form-control " id="exampleInputPassword1" name='password' value={Value.password} onChange={onchangef}/>
  </div>
 
<div className='d-flex flex-column align-items-center '>
<button type="submit" className="btn btn-primary w-50 ">Sign up</button>

  <Link to="/login" className="link-primary p-2 text-center">Have Already account?</Link>
</div>
</form>
  </>
  )
}

export default Signup
