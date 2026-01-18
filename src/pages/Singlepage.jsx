import React, { use, useEffect, useState } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import { API, APIAuthenticated } from '../http'
import { useNavigate } from 'react-router-dom'

const Singlepage = () => {
  const navigate = useNavigate()
  const [jobDetails, setJobDetails]=useState({})
  const {id}= useParams()

  const getJobDetails=async()=>{
     const res= await API.get("job/getjob/"+id)

      setJobDetails(res.data.data)
    console.log("single page data", res.data.data)

  }

  useEffect(()=>{
    getJobDetails()
  },[id])

  //apply job
  
  const applyForJob= async()=>{
    try{
      const res= await APIAuthenticated.post("application/apply/"+id)
      console.log("apply job response", res)
      if(res.status===201){
        alert("Applied successfully")
        navigate("/")
      }else{
        alert("Error applying for job")
      }
    }catch(error){
      console.log("error applying for job", error)
      alert("Error applying for job")
    }
  }

  //job apply function to be implemented

  const applyJob = async() => {
    // Implementation for applying to a job will go here
    const res = await API.post("application/apply/"+id)

    if(res.status===201){
      alert("Applied successfully")
    }else{
      alert("Error applying for job")
    }
  }

  // useEffect(()=>{
  //   applyJob()
  // },[id])



  return (
    <div>
      <h2>{jobDetails.title}</h2>
      <p>{jobDetails.description}</p>
      <p>Location: {jobDetails.location}</p>
      <p>Salary: ₹{jobDetails.salary}</p>

      <p>Company: {jobDetails.company}</p>
      <button  onClick={applyForJob} type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition">
        Apply Now
      </button>
    </div>
  )
}

export default Singlepage
