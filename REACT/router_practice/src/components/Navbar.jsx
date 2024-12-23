import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useAuth } from './Auth'
const Navbar = () => {

  const auth = useAuth()
  return (
    <nav className='bg-blue-50 flex gap-5 h-12 p-2 '>
      {/* <Link to='/'>Home</Link>
        <Link to='/about'>About</Link> */}
      <NavLink style={({ isActive }) => isActive ? { color: '#fff', background: '#7600dc', } : { color: '#545e6f', background: '#f0f0f0' }} to='/'>Home</NavLink>
      <NavLink style={({ isActive }) => isActive ? { color: '#fff', background: '#7600dc', } : { color: '#545e6f', background: '#f0f0f0' }} to='/about'>About</NavLink>
      <NavLink style={({ isActive }) => isActive ? { color: '#fff', background: '#7600dc', } : { color: '#545e6f', background: '#f0f0f0' }} to='/products'>Products</NavLink>
      <NavLink style={({ isActive }) => isActive ? { color: '#fff', background: '#7600dc', } : { color: '#545e6f', background: '#f0f0f0' }} to='/profile'>Profile</NavLink>

        {
          !auth.user &&
          (
            <NavLink style={({ isActive }) => isActive ? { color: '#fff', background: '#7600dc', } : { color: '#545e6f', background: '#f0f0f0' }} to='/login'>Login</NavLink>
          )
        }


    </nav>
  )
}

export default Navbar
