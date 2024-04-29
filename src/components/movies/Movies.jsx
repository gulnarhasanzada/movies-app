import React from 'react'
import {Box} from '@mui/material';
import { useMoviesContext } from '../../context/MoviesContext'
import MovieCard from './MovieCard';

const Movies = () => {
  const{movies} = useMoviesContext();

  return (
    <Box display="flex" flexDirection='row' justifyContent='center' flexWrap='wrap'>
      {movies.map(movie=>{
        return <MovieCard key={movie.id} movie={movie}/>
      })}
    </Box>
  )
}

export default Movies
