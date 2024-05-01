import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import AnimationIcon from '@mui/icons-material/Animation';
import { useState } from 'react';
import Login from '../login/Login';
import Register from '../register/Register';
import { useUserContext } from '../../context/UserContext';
import { logOut } from '../../auth/firebase';
import { toast } from 'react-toastify';
import { useTheme } from '@mui/material';

const Nav = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const {user, setUser} = useUserContext();
  const theme = useTheme()
 
  const signOut = ()=>{
    logOut()
    .then(() => {
        setUser(null)
        toast.success('Successfully, signed out!')
    })
    .catch(error => {
        toast.warning(error)
    });
}
  return (
    <Box>
    <AppBar position="static" sx={{display:'flex', flexDirection:'row', justifyContent:'space-between', backgroundColor: theme.palette.primary.main }}>
    <Toolbar>
    <AnimationIcon sx={{ display: { md: 'flex' }, fontSize:{xs: '0.8rem', sm:'1.5rem'}, mr: 1, color: theme.palette.secondary.main }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { md: 'flex' },
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: theme.palette.secondary.main,
              textDecoration: 'none',
              fontSize:{xs: '0.8rem', sm:'1.5rem'}
            }}
          >
            GMovies
          </Typography>
      </Toolbar>
      <Toolbar>   
        <Link to="/" sx={{fontSize:{xs: '0.6rem', sm: '1rem'}}} variant= 'links.noUnderline'>Home</Link>
        {!user && <Button variant='contained' onClick={()=>setShowLogin(true)} sx={{fontSize:{xs: '0.6rem', sm: '1rem'},px:{xs:'0.5rem'}}}>Login</Button>}
        {!user && <Button variant='contained' onClick={()=>setShowRegister(true)} sx={{fontSize:{xs: '0.6rem', sm: '1rem'},px:{xs:'0.5rem'}}}>Signup</Button>}
        {user && <Button variant='contained' onClick={signOut} sx={{fontSize:{xs: '0.8rem', sm: '1rem'}}}>Logout</Button>}
      </Toolbar>
    </AppBar>
    {showLogin && <Login open={showLogin} closeModal={()=>setShowLogin(false)}/>}
    {showRegister && <Register open={showRegister} closeModal={()=>setShowRegister(false)}/>}
  </Box>
  )
}

export default Nav
