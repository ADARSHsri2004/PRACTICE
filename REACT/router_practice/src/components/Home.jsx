import React from 'react'
import { replace, useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate= useNavigate()
  return (

    <div>
      <h1>Home</h1>
      {/* <button className='bg-blue-400 rounded-lg m-4 p-3' onClick={()=>navigate('order-summary')}>Place order</button> */}
      <button className='bg-blue-400 rounded-lg m-4 p-3' onClick={()=>navigate('order-summary',{replace:true})}>Place order</button>
    </div>
  )
}

export default Home
