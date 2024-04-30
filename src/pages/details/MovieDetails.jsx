import { Box, Container,Typography, Rating, useTheme, Button, Link } from '@mui/material'
import React from 'react'
import "./MovieDetails.css"
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import { useMoviesContext } from '../../context/MoviesContext';
import Videos from '../../components/videos/Videos';


const MovieDetails = () => {
  const theme =useTheme();
  const {movieDetails} = useMoviesContext();
  const backdrop = `${import.meta.env.VITE_MOVIES_IMAGE_URL}/${movieDetails.backdrop_path}`
  const poster = `${import.meta.env.VITE_MOVIES_IMAGE_URL}/${movieDetails.poster_path}`

  return (
      <Box className="details-box" 
         sx={{backgroundImage: `linear-gradient(90deg, rgba(0,0,0,0.95) 30%,  rgba(0,0,0,0.3) 80%, rgba(0,0,0,0.98) 100%), url("${backdrop}")`}}>
      <Container maxWidth="lg" className="details-container">
        <div className='details-poster'>
         <img src={poster} className='poster'/>
        </div>
        <div className='details-info'>
          <Box>
            <Typography variant="h1" sx={{fontSize:'2.5rem'}}>{movieDetails.title}</Typography>
            <div>
              <Typography variant="caption" sx={{fontSize:'0.7rem', color: theme.palette.secondary.light}}>{movieDetails.origin_country} * </Typography> 
              <Typography variant="caption" sx={{fontSize:'0.7rem', color: theme.palette.secondary.light}}>{movieDetails &&movieDetails.release_date} * </Typography> 
              <Typography variant="caption" sx={{fontSize:'0.7rem',  color: theme.palette.secondary.light}}>1h 23m * </Typography>
              {movieDetails.genres && movieDetails.genres.map(genre=>(
                                      <Link href="#" key={genre.id} underline="none" sx={{fontSize:'0.7rem', mr:1, color: theme.palette.secondary.light}}>
                                        {genre.name}
                                      </Link>))}
            </div>

            <Typography variant="h6" sx={{mt: 3, fontSize:'1rem'}}>Rate: ({movieDetails && movieDetails.vote_average && movieDetails.vote_average.toFixed(1)})</Typography>
            <Rating name="read-only" value={movieDetails && movieDetails.vote_average ? (movieDetails.vote_average/2).toFixed(1): 0} readOnly/>

            <Typography variant="h6" sx={{mt: 3, fontSize:'1rem'}}>Overview</Typography>
            <Typography variant="body1" sx={{mt: 1}}>
              {movieDetails.overview}
            </Typography>
          </Box>
          <Box>
            <Button color="secondary" variant='contained' sx={{my: 3, mr: 2,position:'relative', zIndex: 100 }}><PlayCircleOutlineIcon sx={{mr: 1}}/>Play Now</Button>
            <Videos videos={movieDetails.videos}/>
          </Box>
        </div>
      </Container>
    </Box>
  )
}

export default MovieDetails
