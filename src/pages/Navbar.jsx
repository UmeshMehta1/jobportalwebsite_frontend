import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import { logOut } from '../store/authslice'
const Navbar = () => {
  const {isAuthenticated}= useSelector((state)=>state.auth)
  const dispatch = useDispatch()
  const navigate = useNavigate()

      const handleLogout = ()=>{
        console.log("hello")
         dispatch(logOut())
         navigate("/login")
      }

  return (
    <div>
       <nav className="w-full bg-white shadow-sm">
    <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
      <Link to="/" className="text-xl font-bold text-blue-600">
        JobPortal
      </Link>

      <div className="flex items-center gap-4">
        <Link to="/" className="text-sm text-gray-700 hover:text-blue-600">
          Home
        </Link>
        {isAuthenticated ? (
          <button onClick={handleLogout} className="px-5 py-2.5 bg-red-600 text-white border-none rounded cursor-pointer text-base hover:bg-red-700 transition-colors">
            Logout
          </button>
        ) : (
          <>
            <Link to="/login" className="text-sm text-gray-700 hover:text-blue-600">
              Login
            </Link>
            <Link
              to="/register"
              className="px-3 py-1.5 rounded text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
            >
              Register
            </Link>
          </>
        )}
      </div>
    </div>
  </nav>
    </div>
  )
}

export default Navbar
