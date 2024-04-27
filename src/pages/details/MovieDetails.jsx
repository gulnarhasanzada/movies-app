import { Box, Container,Typography, Rating, useTheme, Button, Link } from '@mui/material'
import React from 'react'
import "./MovieDetails.css"
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';

const MovieDetails = () => {
  const theme =useTheme();
  return (
    <Box className="details-box" 
         sx={{backgroundImage: 'linear-gradient(90deg, rgba(0,0,0,0.95) 30%,  rgba(0,0,0,0.3) 80%, rgba(0,0,0,0.98) 100%), url("https://image.tmdb.org/t/p/w1280/qrGtVFxaD8c7et0jUtaYhyTzzPg.jpg")'}}>
      <Container maxWidth="lg" className="details-container">
        <div className='details-poster'>
         <img src="https://image.tmdb.org/t/p/w1280/gmGK5Gw5CIGMPhOmTO0bNA9Q66c.jpg" className='poster'/>
        </div>
        <Box className='details-info'>
          <Box>
            <Typography variant="h1" sx={{fontSize:'2.5rem'}}>Godzilla vs King Kong</Typography>
            <div>
              <Typography variant="caption" sx={{fontSize:'0.7rem', color: theme.palette.secondary.light}}>2009 * </Typography> 
              <Typography variant="caption" sx={{fontSize:'0.7rem',  color: theme.palette.secondary.light}}>1h 23m * </Typography>
              <Link href="#" underline="none" sx={{fontSize:'0.7rem', mr:1, color: theme.palette.secondary.light}}>Action</Link>
              <Link href="#" underline="none" sx={{fontSize:'0.7rem', mr:1, color: theme.palette.secondary.light}}>Drama</Link>
              <Link href="#" underline="none" sx={{fontSize:'0.7rem', mr:1, color: theme.palette.secondary.light}}>Science Fiction</Link>
            </div>

            <Typography variant="h6" sx={{mt: 3, fontSize:'1rem'}}>Rate: (6.4)</Typography>
            <Rating name="read-only" value={6.4/2} readOnly/>

            <Typography variant="h6" sx={{mt: 3, fontSize:'1rem'}}>Overview</Typography>
            <Typography variant="body1" sx={{mt: 1}}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fermentum tortor ac
              ultricies pharetra. Vivamus auctor vehicula mauris, et dictum urna eleifend id.
              Phasellus maximus odio ac est eleifend, vel lacinia nulla faucibus. Nullam non velit
              eget ante eleifend mollis. In hac habitasse platea dictumst. Nulla rutrum velit ac
              metus vehicula, eget viverra risus dapibus. In hac habitasse platea dictumst.
            </Typography>
          </Box>
          <Box>
            <Button color="secondary" variant='contained' sx={{my: 3, mr: 2,position:'relative', zIndex: 100 }}><PlayCircleOutlineIcon sx={{mr: 1}}/>Play Now</Button>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/UEJuNHOd8Dw" 
                    title="YouTube video player" frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default MovieDetails
