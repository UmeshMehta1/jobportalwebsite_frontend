import React, { useEffect, useState } from 'react'
import { API } from '../http'

import { useNavigate } from 'react-router-dom'

const Landingpage = () => {
  const navigate=useNavigate()

  const [data, setData]=useState([])

  
 
 const getJobData=async()=>{
    console.log("called")
  const result= await API.get("job/getjobs")
  console.log('api payload', result.data)
  const payload = result.data
  const jobs = Array.isArray(payload) ? payload : (payload && Array.isArray(payload.data) ? payload.data : [])
  setData(jobs)
 }


 useEffect(()=>{
    getJobData()
 },[])

 console.log("test",data)

  const handleNavigate=()=>{
    navigate("/singlepage")
  }

  return (

    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-100">
       
     {data.length===0?<h4>No jobs available</h4>:data.map((job)=>{
         return(
        <>
          <div className="flex justify-between items-start mb-3">
        <div>
          <h2 className="text-xl font-semibold text-gray-800">
              {job.title}
          </h2>
          <p className="text-sm text-gray-500">
          {"hello"}
          </p>
        </div>
        <span className="text-sm font-medium text-green-600 bg-green-100 px-3 py-1 rounded-full">
          ₹ {job.salary}
        </span>
      </div>

      {/* Description */}
      <p className="text-gray-600 text-sm mb-4 line-clamp-3">
        {job.description}
      </p>

      {/* Footer */}
      <div className="flex justify-between items-center">
        <div className="flex items-center text-sm text-gray-500">
          📍 {job.location} <span className="ml-1">{}</span>
        </div>

        <button onClick={handleNavigate} className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-2 rounded-lg transition">
          View Details
        </button>
      </div>
        </>
         
         )
       })}
    </div>
  )

}
export default Landingpage
