import React from 'react'
import {Routes, Route} from 'react-router-dom'
import NotFound from '../pages/not-found/NotFound'
import Home from '../pages/home/Home'


const AppRouter = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="*" element={<NotFound/>} />
    </Routes>
  )
}

export default AppRouter
