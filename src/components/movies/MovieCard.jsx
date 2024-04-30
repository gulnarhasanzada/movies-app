import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

const MovieCard = ({movie}) => {
  const imgUrl = `${import.meta.env.VITE_MOVIES_IMAGE_URL}/${movie.poster_path}`
  return (
    <Card sx={{ width: 300, m: 3, backgroundColor:'primary.main' }}>
      <Link to={`/details/${movie.id}`} style={{textDecoration: 'none'}}>
      <CardMedia
        sx={{ height: 450 }}
        image={imgUrl}
        title={movie.title}
      />
      <CardContent sx={{height:55, overflow:'hidden',}}>
        <Typography gutterBottom variant="h2" component="div" color="white" sx={{fontSize:'1rem',} }>
          {movie.title}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="secondary" variant='outlined'>Deatils</Button>
      </CardActions>
      </Link>
    </Card>
  )
}

export default MovieCard
