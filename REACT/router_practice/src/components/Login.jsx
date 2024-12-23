import React, { useState } from 'react'
import { useAuth } from './Auth'
import { useNavigate ,useLocation} from 'react-router-dom'

const Login = () => {
    const [user, setuser] = useState('')
    const auth=  useAuth()
    const navigate= useNavigate()
    const location = useLocation()
    const redirectPath= location.state?.path  || '/'
    const handleLogin = () => { 
        auth.login(user)
        navigate(redirectPath,{replace:true})
     }
  return (
    <div>
        <label htmlFor="">
            USERNAME: <input type="text" onChange={e=>setuser(e.target.value)}/>
        </label>
        <button onClick={handleLogin} className='bg-blue-100 m-4 p-4'>Login</button>
    </div>
  )
}

export default Login
