import './App.css'
import {Box, ThemeProvider} from '@mui/material';
import Nav from './components/nav/Nav';
import AppRouter from './router/AppRouter';
import { Outlet } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer} from "react-toastify";
import theme from './Theme';
import Search from './components/search/Search';
import { useMoviesContext } from './context/MoviesContext';
import Footer from './components/footer/Footer';


function App() {
  const {movieDetails} = useMoviesContext();
  const backdrop = `${import.meta.env.VITE_MOVIES_IMAGE_URL}/${movieDetails.backdrop_path}`
  return (
    <ThemeProvider theme={theme}>
      <Box className="app" display="flex"sx={{flexDirection: 'column', backgroundImage: `linear-gradient(90deg, rgba(0,0,0,0.95) 30%,  rgba(0,0,0,0.3) 80%, rgba(0,0,0,0.98) 100%), url("${backdrop}")`}}>
        <Nav/>
        <Search/>
        <ToastContainer />
        <AppRouter />
        <Outlet/>
        <Footer/>
      </Box>
      </ThemeProvider>
  )
}

export default App

