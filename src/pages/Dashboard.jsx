import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Navigate, useNavigate, useSearchParams } from "react-router-dom"
import { logOut } from "../store/authslice"

const Dashboard = () => {
const dispatch = useDispatch()
const navigate = useNavigate()
  const {data} = useSelector((state)=>state.auth)

  console.log(data)
 
    const handleLogout = ()=>{

      console.log("hello")
       dispatch(logOut(data))
       navigate("/login")
    }

  return (
    <div className="max-w-3xl mx-auto my-12 px-5">
      <div className="bg-white p-8 rounded-lg shadow-md">
        {/* Page Title */}
        <h1 className="mb-5 text-3xl font-bold">Dashboard</h1>

        {/* User Information Card */}
        <div className="mb-8 p-5 bg-gray-50 rounded-lg">
          <h2 className="text-2xl font-semibold mb-3">Welcome, {data?.name}!</h2>
        
  <p className="mb-2"><strong>Email:</strong> {data?.email}</p>
          <p><strong>Role:</strong> {data?.role === 'jobseeker' ? 'Job Seeker' : 'Job Provider'}</p>
        </div>

        {/* Logout Button */}
        <button
          onClick={handleLogout}
          className="px-5 py-2.5 bg-red-600 text-white border-none rounded cursor-pointer text-base hover:bg-red-700 transition-colors"
        >
          Logout
        </button>
      </div>
    </div>
  )
}

export default Dashboard