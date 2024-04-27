import { Box, Container,Typography, Rating, useTheme, Button} from '@mui/material'
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
        <div className='details-info'>
          <h1>Godzilla vs King Kong</h1>
         

          <Typography variant="h6" sx={{mt: 4}}>Rate: (6.4)</Typography>
          <Rating name="read-only" value={6.4/2} readOnly/>
          <Typography variant="body2" sx={{mt: 4}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fermentum tortor ac
            ultricies pharetra. Vivamus auctor vehicula mauris, et dictum urna eleifend id.
            Phasellus maximus odio ac est eleifend, vel lacinia nulla faucibus. Nullam non velit
            eget ante eleifend mollis. In hac habitasse platea dictumst. Nulla rutrum velit ac
            metus vehicula, eget viverra risus dapibus. In hac habitasse platea dictumst.
          </Typography>
          <Button color="secondary" variant='contained' sx={{mt: 3}}><PlayCircleOutlineIcon />  Play Now</Button>
        </div>
      </Container>
    </Box>
  )
}

export default MovieDetails
