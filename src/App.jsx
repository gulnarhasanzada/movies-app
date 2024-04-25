import './App.css'
import {Box, Container} from '@mui/material';
import Nav from './components/nav/Nav';
import AppRouter from './router/AppRouter';
import { Outlet } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer} from "react-toastify";

function App() {
  
  return (
      <Box display="flex" sx={{flexDirection: 'column'}}>
        <Nav/>
        <ToastContainer />
        <Container maxWidth="xl">
          <AppRouter />
          <Outlet/>
        </Container>
      </Box>
  )
}

export default App

