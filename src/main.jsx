import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import UserContextProvider from './context/UserContext.jsx'
import MoviesContextProvider from './context/MoviesContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <UserContextProvider>
      <MoviesContextProvider>
          <App/> 
      </MoviesContextProvider>
    </UserContextProvider>
  </BrowserRouter>,
)
