import { Route, Routes, Outlet, Link } from 'react-router-dom'
import Home from './components/Home'
// import About from './components/About'
import Navbar from './components/Navbar'
import Order_summary from './components/Order_summary'
import Nomathc from './components/Nomathc'
import Products from './components/Products'
import New from './components/New'
import Featured from './components/Featured'
import Users from './components/Users'
import UserDetails from './components/UserDetails'
import Admin from './components/Admin'
import React from 'react'
import Profile from './components/Profile'
import { AuthProvider } from './components/Auth'
import Login from './components/login'
import RequireAuth from './components/RequireAuth'

const LazyAbout = React.lazy(() => import('./components/About'))
function App() {


  return (
    <>
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='about' element={<React.Suspense fallback='Loading....'><LazyAbout /></React.Suspense>} />
          <Route path='order-summary' element={<Order_summary />} />
          <Route path='products' element={<Products />}>
            <Route index element={<Featured />} />
            <Route path='new' element={<New />} />
            <Route path='featured' element={<Featured />} />
          </Route>
          <Route path='users' element={<Users />} />
          <Route path='users/:userId' element={<UserDetails />} />
          <Route path='users/admin' element={<Admin />} />

          <Route path='*' element={<Nomathc />} />
          <Route path='profile' element={<RequireAuth><Profile /></RequireAuth>} />
          <Route path='login' element={<Login />} />

        </Routes>
      </AuthProvider>

    </>
  )
}

export default App
