import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';

import Dashboard from './pages/Dashboard';

import Landingpage from './pages/Landingpage';
import Navbar from './pages/Navbar';

const App = () => {
  return (
   <>
   <BrowserRouter>
   <Navbar/>
    <Routes>
      <Route path='/'   element={<Landingpage/>}/>
     <Route path='/login'  element={<Login/>}/>
     <Route path="/register" element={<Register/>}/>
     <Route path="/dashboard" element={<Dashboard/>}/>
    </Routes>

   </BrowserRouter>
  
   </>
  )
}

export default App
