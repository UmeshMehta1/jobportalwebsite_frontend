import React, { useEffect } from 'react'
import { API } from '../http'



const Landingpage = () => {

  const [data, setData]=useState({

  })

  const handleChange = (e)=>{
    const {name, value}= e.target

    setData((prev)=>({
      ...prev,
      [name]:value
    }))
  }
    
  const fetchJob =async()=>{
     const result = await API.get("jobs/getjobs")
     console.log(result)
     setData(result.data)
  }

  
 useEffect(()=>{
    fetchJob()
 },[])

  return (

    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-100">
      
      {/* Header */}
      <div className="flex justify-between items-start mb-3">
        <div>
          <h2 className="text-xl font-semibold text-gray-800">
          test
          </h2>
          <p className="text-sm text-gray-500">
            {}
          </p>
        </div>
        <span className="text-sm font-medium text-green-600 bg-green-100 px-3 py-1 rounded-full">
          ₹ 100
        </span>
      </div>

      {/* Description */}
      <p className="text-gray-600 text-sm mb-4 line-clamp-3">
        description
      </p>

      {/* Footer */}
      <div className="flex justify-between items-center">
        <div className="flex items-center text-sm text-gray-500">
          📍 ok foot <span className="ml-1">{}</span>
        </div>

        <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-2 rounded-lg transition">
          View Details
        </button>
      </div>
    </div>
  )
}

export default Landingpage
