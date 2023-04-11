import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Npage from './component/Npage';
import Dashborad from './component/Dashborad';
import LoginForm from './component/LoginForm';
import Signup from './component/Signup';
const App = () => {
  return (
    <BrowserRouter>


      <Routes>
      <Route path="/" element={<Signup/>} />
        <Route path="/login" element={<LoginForm/>} />
        <Route path="/main" element={<Dashborad/>} />
        <Route path="*" element={<Npage />} />
      </Routes>

    </BrowserRouter>
  )
}
export default App
