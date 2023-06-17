import React from 'react'
import { Route, Routes } from 'react-router'
import Home from '../components/screens/home/Home'
import Search from '../components/layouts/Header/Search/Search'
import Cars from '../components/screens/cars/Cars'
import CarDetail from '../components/screens/car-detail/CarDetail'
import AuthPage from '../components/screens/auth/AuthPage'

export default function App() {
  return (
    <div className='__container'>
     
      <Routes>
              <Route path='/auth' element={<AuthPage />} />
              <Route path='/' element={<Home />} />
              <Route path="/search" element={<Search />} />
              <Route path="/cars" element={<Cars />} />
              <Route path="/cars/:id" element={<CarDetail />} />
          </Routes>

        
    </div>
  )
}
