import { Route, Routes, Outlet,Link } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Navbar from './components/Navbar'
import Order_summary from './components/Order_summary'
import Nomathc from './components/Nomathc'
import Products from './components/Products'
import New from './components/New'
import Featured from './components/Featured'


function App() {


  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='order-summary' element={<Order_summary />} />
        <Route path='products' element={<Products />}>
          <Route path='new' element={<New/>}/>
          <Route path='featured' element={<Featured/>}/>
        </Route>
        <Route path='*' element={<Nomathc />} />

      </Routes>
    </>
  )
}

export default App
