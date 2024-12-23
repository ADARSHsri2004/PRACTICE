import React from 'react'
import { useAuth } from './Auth'
import { useNavigate } from 'react-router-dom'

const Profile = () => {
    const auth = useAuth()
    const navigate = useNavigate()
    const handleLogout = () => {
        auth.logout()
        navigate('/')

    }
    return (
        <div>
            Welcome {auth.user}
            <button onClick={handleLogout} className='bg-blue-100 p-4 m-4'>Log Out</button>
        </div>
    )
}

export default Profile
