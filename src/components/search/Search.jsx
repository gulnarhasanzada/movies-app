import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { useMoviesContext } from '../../context/MoviesContext';
import { useNavigate } from 'react-router-dom';

export default function Search() {
  const {setSearch} = useMoviesContext();
  const navigate  = useNavigate();
  
  const changeHandler = (e)=>{
    navigate('/')
    setSearch(e.target.value)
  }

  return (
    <Paper
      component="form"
      sx={{ p: '10px 20px', width: '100%', display: 'flex', alignItems: 'center', borderRadius: 0, backgroundColor:"rgba(000, 000, 000, 0.8)"}}
    >
      <InputBase
        sx={{ ml: 1, flex: 1, width: '100%',color: 'white' }}
        placeholder="Search Movies"
        onChange={changeHandler}
      />
      <IconButton type="button" sx={{ p: '10px', color: 'white' }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}
