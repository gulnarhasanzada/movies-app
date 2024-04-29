import './App.css'
import {Box, ThemeProvider} from '@mui/material';
import Nav from './components/nav/Nav';
import AppRouter from './router/AppRouter';
import { Outlet } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer} from "react-toastify";
import theme from './Theme';

function App() {
  
  return (
    <ThemeProvider theme={theme}>
      <Box display="flex" sx={{flexDirection: 'column'}}>
        <Nav/>
        <ToastContainer />
        <AppRouter />
        <Outlet/>
      </Box>
      </ThemeProvider>
  )
}

export default App

