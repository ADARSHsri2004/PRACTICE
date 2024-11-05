import React from 'react'
import { useNavigate } from 'react-router-dom'

const Order_summary= () => {
  const navigate=useNavigate()
  return (
    <>
    <div>
      Order is confirmed
      <button className='bg-blue-400 rounded-lg m-4 p-3' onClick={()=>navigate(-1)}>Go back</button>
    </div>
    </>
  )
}

export default Order_summary
