import React from 'react'
import { Link,NavLink,Outlet } from 'react-router-dom'

const Products = () => {
  return (
    <>
    <div>
      <input className='m-4 bg-black/10 p-2' placeholder='Search products' />
      <nav className='flex gap-5 m-5'>
        <Link to='/featured'>Featured</Link>
        <Link to='/new'>New</Link>
      </nav>
    </div>
    </>
  )
}

export default Products
