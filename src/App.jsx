import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';

import Dashboard from './pages/Dashboard';

import Landingpage from './pages/Landingpage';
import Navbar from './pages/Navbar';
import CreateJob from './pages/CreateJob';
import Singlepage from './pages/Singlepage';

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
     <Route path="/createjob" element={<CreateJob/>}/>
     <Route path="/singlepage/:id" element={<Singlepage/>}/>
    </Routes>

   </BrowserRouter>
  
   </>
  )
}

export default App
