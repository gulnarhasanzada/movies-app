import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import AnimationIcon from '@mui/icons-material/Animation';
import { useState } from 'react';
import Login from '../../pages/login/Login';

const Nav = () => {
  const [showLogin, setShowLogin] = useState(false);

  const hideLogin = ()=>{
    setShowLogin(false)
  }

  const openLogin = ()=>{
    setShowLogin(true)
  }

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
        <Button variant='contained' onClick={openLogin}>Login</Button>
        <Link to="/">Home</Link>
      </Toolbar>
    </AppBar>
    {showLogin && <Login open={showLogin} closeModal={hideLogin}/>}
  </Box>
  )
}

export default Nav
