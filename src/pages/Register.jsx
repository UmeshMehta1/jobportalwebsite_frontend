import { useState } from "react"

import { registerUser } from "../store/authslice.js"
const Register = () => {

 
  const [formData, setFormData]=useState({
    name:"",
    email:"",
    password:"",
    role:"jobseeker",
  })

  const handleChange=(e)=>{
    const {name,value}= e.target
    setFormData((prev)=>({
      ...prev,
      [name]:value
    }))
  }

  const handleSubmit=async(e)=>{

  }
  
  return (
    <div className="max-w-md mx-auto my-12 px-5">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h2 className="mb-5 text-center text-2xl font-semibold">Register</h2>

       
        {error && (
          <div className="bg-red-100 text-red-800 p-3 rounded mb-5">
            {error}
          </div>
        )}

        {/* Registration Form */}
        <form onSubmit={handleSubmit}>
          {/* Name Input */}
          <div className="mb-4">
            <label className="block mb-2 font-medium">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-2.5 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Email Input */}
          <div className="mb-4">
            <label className="block mb-2 font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-2.5 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Password Input */}
          <div className="mb-5">
            <label className="block mb-2 font-medium">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              minLength="6"
              className="w-full p-2.5 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Selected Role Display (Read-only) */}
          <div className="mb-5">
            <label className="block mb-2 font-medium">Select Role:</label>
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              required
              className="w-full p-2.5 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
            >
              <option value="jobseeker">Job Seeker</option>
              <option value="jobprovider">Job Provider</option>
            </select>
            <p className="text-xs text-gray-600 mt-1">
              Choose your role to get started.
            </p>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            // disabled={status === 'loading'}
            className={`w-full py-3 rounded text-white font-medium text-base transition-colors ${
              status === 'loading' 
                ? 'bg-gray-400 cursor-not-allowed' 
                : 'bg-blue-600 hover:bg-blue-700 cursor-pointer'
            }`}
          >
            {status === 'loading' ? 'Registering...' : 'Register'}
          </button>
        </form>

        {/* Link to Login */}
        <p className="mt-5 text-center">
          Already have an account?{' '}
          <Link to="/login" className="text-blue-600 hover:underline">
            Login here
          </Link>
        </p>
      </div>
    </div>
  )
}
export default Register
