import React from 'react'
import {Routes, Route} from 'react-router-dom'
import NotFound from '../pages/not-found/NotFound'
import Home from '../pages/home/Home'
import MovieDetails from '../pages/details/MovieDetails'


const AppRouter = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/details" element={<MovieDetails/>} />
        <Route path="*" element={<NotFound/>} />
    </Routes>
  )
}

export default AppRouter
