import React from 'react'
import {Box} from '@mui/material';
import { useMoviesContext } from '../../context/MoviesContext'
import MovieCard from './MovieCard';

const Movies = () => {
  const{movies} = useMoviesContext();

  return (
    <Box sx={{display: 'flex', flexDirection:'row', flexWrap:'wrap', justifyContent:'center'}}>
      {movies.map(movie=>{
        return <MovieCard key={movie.id} movie={movie}/>
      })}
    </Box>
  )
}

export default Movies
