import React from 'react'
import {  useNavigate } from 'react-router-dom'
import {  signOut } from "firebase/auth";
import {auth } from './firebase'
const Logout = () => {
    const navigate=useNavigate();
    const handleLogout=async()=>{
        const success=signOut(auth);
       if(success){
        navigate("/");
       }
    }
  return (
    <button onClick={handleLogout} type="button" className="btn btn-dark">Logout</button>
  )
}

export default Logout
