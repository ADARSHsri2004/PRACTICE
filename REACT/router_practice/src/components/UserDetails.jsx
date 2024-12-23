import React from 'react'
import { useParams } from 'react-router-dom'
const UserDetails = () => {
  const param=useParams()
  const userId=param.userId
  return (
    <div>
      Detail about users  {userId}
    </div>
  )
}

export default UserDetails
