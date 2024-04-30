import { createContext, useContext, useEffect, useState } from "react";
import axios from 'axios'
import { useLocation } from "react-router-dom";

const MoviesContext = createContext();

const  MoviesContextProvider = ({children}) =>{
    const [movies, setMovies] = useState([]);
    const [movieDetails, setMovieDetails] = useState({});
    const apiKey = import.meta.env.VITE_MOVIES_API_KEY;
    const url = 'https://api.themoviedb.org/3';

    const location = useLocation();
    const movieId = location.pathname.split('/')[2]


    const fetchMovies = async ()=>{
        const res = await axios.get(`${url}/discover/movie?api_key=${apiKey}`);
        setMovies(res.data.results)
    }

    const fetchMovieById = async ()=>{
        const res = await axios.get(`${url}/movie/${movieId}`,{
            headers:{
                'Authorization': import.meta.env.VITE_MOVIES_TOKEN
            }
        });
        const videoData = await axios.get(`${url}/movie/${movieId}/videos`,{
            headers:{
                'Authorization': import.meta.env.VITE_MOVIES_TOKEN
            }
        });
        const videos = videoData.data.results.filter(video=>video.type === 'Trailer')
        setMovieDetails({...res.data, videos})
    }

    useEffect(()=>{
        fetchMovies();  
    },[])

    useEffect(()=>{
        if(movieId){
            fetchMovieById();
        }
    },[movieId])

    const values = {
        movies,
        movieDetails,
        fetchMovieById
    }

    return <MoviesContext.Provider value={values}>{children}</MoviesContext.Provider>
}

export const useMoviesContext = ()=>{
    return useContext(MoviesContext)
}

export default MoviesContextProvider;