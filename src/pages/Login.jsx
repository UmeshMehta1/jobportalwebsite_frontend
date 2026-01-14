import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { loginUser } from "../store/authslice"
import { Link, useNavigate } from "react-router-dom"


const Login = () => {

const dispatch = useDispatch()
const navigate= useNavigate()

  const {status, error}=useSelector((state)=>state.auth)


  const [formData, setFormData]=useState({
    email:"",
    password:"",
  })



  const handleSubmit =async(e)=>{
    e.preventDefault()
    const result=await dispatch((loginUser(formData)))

    if(result.success){
     navigate("/dashboard")
    }else{
      alert("something wrong")
    }
  }


  const handleChange=(e)=>{
      const {name,value}= e.target

    //const name = e.target.name
    //const value = e.target.value
    setFormData((prev)=>({
      ...prev,
      [name]:value
    }))
  }

  
  return (
    <div className="max-w-md mx-auto my-12 px-5">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h2 className="mb-5 text-center text-2xl font-semibold">Login</h2>

       
        {error && (
          <div className="bg-red-100 text-red-800 p-3 rounded mb-5">
            {error}
          </div>
        )}

        {/* Login Form */}
        <form onSubmit={handleSubmit}>
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
              className="w-full p-2.5 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={status === 'loading'}
            className={`w-full py-3 rounded text-white font-medium text-base transition-colors ${
              status === 'loading' 
                ? 'bg-gray-400 cursor-not-allowed' 
                : 'bg-blue-600 hover:bg-blue-700 cursor-pointer'
            }`}
          >
            {status === 'loading' ? 'Logging in...' : 'Login'}
          </button>
       
        </form>

        {/* Link to Register */}
        <p className="mt-5 text-center">
          Don't have an account?{' '}
          <Link to="/register" className="text-blue-600 hover:underline">
            Register here
          </Link>
        </p>
      </div>

    </div>
  )
}

export default Login