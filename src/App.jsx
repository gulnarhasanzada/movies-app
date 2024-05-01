import './App.css'
import {Box, ThemeProvider} from '@mui/material';
import Nav from './components/nav/Nav';
import AppRouter from './router/AppRouter';
import { Outlet } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer} from "react-toastify";
import theme from './Theme';
import Search from './components/search/Search';
import Footer from './components/footer/Footer';

function App() {
  
  return (
    <ThemeProvider theme={theme}>
      <Box display="flex" sx={{flexDirection: 'column', minHeight:'100vh'}}>
        <ToastContainer />
        <Nav/>
        <Search/>
        <Box sx={{flex: 1}}>
          <AppRouter />
          <Outlet/>
        </Box>
        <Footer/>
      </Box>
      </ThemeProvider>
  )
}

export default App

