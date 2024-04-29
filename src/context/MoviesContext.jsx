import { createContext, useContext, useEffect, useState } from "react";
import axios from 'axios'

const MoviesContext = createContext();

const  MoviesContextProvider = ({children}) =>{
    const [movies, setMovies] = useState([]);
    const apiKey = import.meta.env.VITE_MOVIES_API_KEY;
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}`;

    const fetchMovies = async ()=>{
        const res = await axios.get(url);
        setMovies(res.data.results)
    }

    useEffect(()=>{
      fetchMovies();  
    },[])

    const values = {
        movies,
        fetchMovies
    }

    return <MoviesContext.Provider value={values}>{children}</MoviesContext.Provider>
}

export const useMoviesContext = ()=>{
    return useContext(MoviesContext)
}

export default MoviesContextProvider;