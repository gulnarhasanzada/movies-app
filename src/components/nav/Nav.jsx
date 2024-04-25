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

const Nav = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  return (
    <Box>
    <AppBar position="static" sx={{display:'flex', flexDirection:'row', justifyContent:'space-between' }}>
    <Toolbar>
    <AnimationIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            GMovies
          </Typography>
      </Toolbar>
      <Toolbar>   
        <Link to="/">Home</Link>
        <Button variant='contained' onClick={()=>setShowLogin(true)}>Login</Button>
        <Button variant='contained' onClick={()=>setShowRegister(true)}>Register</Button>
      </Toolbar>
    </AppBar>
    {showLogin && <Login open={showLogin} closeModal={()=>setShowLogin(false)}/>}
    {showRegister && <Register open={showRegister} closeModal={()=>setShowRegister(false)}/>}
  </Box>
  )
}

export default Nav
