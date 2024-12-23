import React from 'react'
import { Outlet, useSearchParams } from 'react-router-dom'

const Users = () => {
  const [searchParams, setsearchParams] = useSearchParams()
  const showActive =searchParams.get('filter')==='active'   //true if we click on active user button
  return (
    <div>
      <div>
        <h2>user 1</h2>
        <h2>user 2</h2>
        <h2>user 3</h2>
      </div>
      <div>
        <button onClick={() => setsearchParams({ filter: 'active' })
        } className='bg-blue-100 m-4 p-4'>Active users</button>
        <button onClick={() => setsearchParams({})} className='bg-blue-100 m-4 p-4'>Reset filter</button>
      </div>
      {
        showActive?<h1>Showing active users</h1>:  <h1>showing all users </h1>      }
    </div>
  )
}

export default Users
