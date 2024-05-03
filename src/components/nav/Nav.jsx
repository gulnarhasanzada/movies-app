import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import AnimationIcon from '@mui/icons-material/Animation';

import { useTheme } from '@mui/material';
import { useUserContext } from '../../context/UserContext';

const Nav = () => {
  const {currentUser, logOut} = useUserContext();
  const theme = useTheme()
  console.log(currentUser)
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
        {currentUser && <p>{currentUser.displayName}</p>} 
        <Link to="/" className='nav-link'>Home</Link>
        {!currentUser && <Link to="/login" className='nav-link'>Login</Link>}
        {!currentUser && <Link to="/register" className='nav-link'>Register</Link>}
        {currentUser && <Link  onClick={()=>logOut()} className='nav-link'>Logout</Link>}
      </Toolbar>
    </AppBar>
  </Box>
  )
}

export default Nav
