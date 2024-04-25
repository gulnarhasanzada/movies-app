import React from 'react'
import {Routes, Route} from 'react-router-dom'
import NotFound from '../pages/not-found/NotFound'
import Register from '../pages/register/Register'
import Login from '../pages/login/Login'
import Home from '../pages/home/Home'


const AppRouter = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="*" element={<NotFound/>} />
    </Routes>
  )
}

export default AppRouter
