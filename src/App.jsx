import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Landingpage from './pages/Landingpage';
import Dashboard from './pages/Dashboard';

const App = () => {
  return (
   <>
   <BrowserRouter>
    <Routes>
      <Route path='/'    element={<Landingpage/>}/>
     <Route path='/login'  element={<Login/>}/>
     <Route path="/register" element={<Register/>}/>
     <Route path="/dashboard" element={<Dashboard/>}/>
    </Routes>

   </BrowserRouter>
  
   </>
  )
}

export default App
