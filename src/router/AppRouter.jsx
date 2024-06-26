import React from 'react'
import {Routes, Route} from 'react-router-dom'
import NotFound from '../pages/not-found/NotFound'
import Home from '../pages/home/Home'
import MovieDetails from '../pages/details/MovieDetails'
import Login from '../pages/login/Login'
import Register from '../pages/register/Register'
import PrivateRouter from './PrivateRouter'

const AppRouter = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route element={<PrivateRouter />}>
          <Route path="/details/:id" element={<MovieDetails />} />
        </Route>
        <Route path="*" element={<NotFound/>} />
    </Routes>
  )
}

export default AppRouter
