import { createContext, useContext, useEffect, useState } from "react";
import axios from 'axios'
import { useLocation } from "react-router-dom";

const MoviesContext = createContext();

const  MoviesContextProvider = ({children}) =>{
    const [movies, setMovies] = useState([]);
    const [movieDetails, setMovieDetails] = useState({});
    const [search, setSearch] = useState("")
    const apiKey = import.meta.env.VITE_MOVIES_API_KEY;
    const url = 'https://api.themoviedb.org/3';

    const location = useLocation();
    const movieId = location.pathname.split('/')[2]


    const fetchMovies = async ()=>{
        let fetchUrl = `${url}/discover/movie?api_key=${apiKey}`;
        if(search !==''){
          fetchUrl =  `${url}/search/movie?api_key=${apiKey}&query=${search}`
        }
        const res = await axios.get(fetchUrl);
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
        const videos = videoData.data.results.filter(video=>video.type === 'Trailer').slice(0,2)
        setMovieDetails({...res.data, videos})
    }

    useEffect(()=>{
        fetchMovies();  
    },[search])

    useEffect(()=>{
        if(movieId){
            fetchMovieById();
        }
    },[movieId])

    const values = {
        movies,
        movieDetails,
        fetchMovieById,
        setSearch
    }

    return <MoviesContext.Provider value={values}>{children}</MoviesContext.Provider>
}

export const useMoviesContext = ()=>{
    return useContext(MoviesContext)
}

export default MoviesContextProvider;