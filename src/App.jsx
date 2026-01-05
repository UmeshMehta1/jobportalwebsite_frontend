import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Landingpage from './pages/Landingpage';

const App = () => {
  return (
   <>
   <BrowserRouter>
    <Routes>
      <Route path='/'    element={<Landingpage/>}/>
     <Route path='/login'  element={<Login/>}/>
     <Route path="/register" element={<Register/>}/>
    </Routes>

   </BrowserRouter>
  
   </>
  )
}

export default App
