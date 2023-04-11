import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { GoogleAuthProvider,signInWithPopup,signInWithEmailAndPassword } from "firebase/auth";
import {auth } from './firebase'
import Alert from './Alert';

const LoginForm = () => {
  const navigate=useNavigate();
  const [Value, setValue] = useState({
    password: "", email: ''
  })
  const provider = new GoogleAuthProvider();
  const onchangef = (e) => {
    setValue({ ...Value, [e.target.name]: e.target.value })
  }

  const [error, seterror]=useState('');

  const signupGoogle=async()=>{
   const success=signInWithPopup(auth,provider);

  
  if(success){
  navigate('/main');
  }
  }

  const handleSubmit=async(e)=>{
    e.preventDefault();
    seterror(" ")
    try {
      const success=await signInWithEmailAndPassword(auth, Value.email, Value.password);
      
      if(success){
        navigate('/main');
        }
    } catch (err) {
      seterror(err.message);
    }
  }
  return (<>
    <form className=' rounded-2 bg-secondary p-5 w-50' onSubmit={handleSubmit}>
    { error ===''? "":<Alert msg={error}/>}
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label text-white">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='email' value={Value.email} onChange={onchangef}/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label text-white">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" name='password' value={Value.password} onChange={onchangef}/>
  </div>
 
<div className='d-flex flex-column align-items-center '>
<div className='w-100 d-flex justify-content-between'>
<button type="submit" className="btn btn-primary w-25 ">Login in</button>
<button onClick={signupGoogle} type="submit" className="btn btn-primary w-50 "><i className="fa-brands fa-google p-2"></i>Sign up with google</button>
</div>
  <Link to="/" className="link-primary p-2 text-center">Have Already account?</Link>
</div>
</form>
  </>
  )
}

export default LoginForm
