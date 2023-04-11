import React, { useEffect } from 'react'
import {  useNavigate } from 'react-router-dom'
import {auth } from './firebase'
import Logout from './Logout';

const Dashborad = () => {
  const navigate=useNavigate();
  useEffect(()=>{
    const user=auth.currentUser;
    
    if(user===null){
      navigate("/")
    }
    // eslint-disable-next-line
  },[])

  return (
    <div >
      <div>HELLO WORLD</div>
      <Logout/>
    </div>
  )
}

export default Dashborad
