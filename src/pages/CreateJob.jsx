import React, { useState } from 'react'
import { APIAuthenticated } from '../http'
import { useNavigate } from 'react-router-dom'


const CreateJob = () => {
  const navigate = useNavigate()


    const [jobTitle,setJobTitle]= useState("")

    console.log(jobTitle)


    const [jobDescription, setJobDescription]= useState("")
    console.log(jobDescription)
    const [salary,setSalary]=useState("")
    const [location, setLocation]=useState("")
   const [companyName, setCompanyName]=useState("")

   const formData ={
    title:jobTitle,
    description: jobDescription,
     salary:  salary,
     location:  location,
     company: companyName
   }


    const handleSubmit =async(e)=>{
         e.preventDefault()
         console.log("hello test")

         const res = await  APIAuthenticated.post("job/postjob/", formData)
         console.log(res)
         if(res.status===201){
          navigate("/dashboard")
         }
    }
  
  return (
   
    <form onSubmit={handleSubmit}>
  <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
    <div className="w-full max-w-lg bg-white rounded-xl shadow-md p-6">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
        Create Job
      </h2>
      {/* Job Title */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Job Title
        </label>
        <input  value={jobTitle}  onChange={(e)=>setJobTitle(e.target.value)} type="text" placeholder="Frontend Developer" required className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
      </div> 
      {/* Description */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Job Description
        </label>
        <textarea rows={4} value={jobDescription} onChange={(e)=>setJobDescription(e.target.value)} placeholder="Describe job responsibilities..." required className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
      </div>
      {/* Location */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Location
        </label>
        <input type="text" value={location} onChange={(e)=>setLocation(e.target.value)} placeholder="Kathmandu, Nepal" required className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
      </div>
      {/* Salary */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Salary
        </label>
        <input value={salary} onChange={(e)=>setSalary(e.target.value)} type="number" placeholder={50000} required className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
      </div>
      {/* Company */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Company Name
        </label>
        <input value={companyName} onChange={(e)=>setCompanyName(e.target.value)} type="text" placeholder="ABC Tech Pvt. Ltd." required className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
      </div>
      {/* Submit Button */}
      <button  type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition">
        Create Job
      </button>
    </div>
  </div>
  </form>

  )
}

export default CreateJob
