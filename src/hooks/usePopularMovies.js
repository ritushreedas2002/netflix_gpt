import { useDispatch, useSelector } from "react-redux";
import { addPopularMovies } from "../utils/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const usePopularMovies=()=>{
    const dispatch=useDispatch();
    const popularMovies=useSelector(store=>store.movies.popularMovies);
    const getNowPopularMovies=async ()=>{
        const data=await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', 
        API_OPTIONS);

        const json=await data.json();
        console.log(json.results);
        dispatch(addPopularMovies(json.results))
    }
    useEffect(()=>{
        //memoisation----as updated in redux store so nothing to call the api multiple times
        !popularMovies && getNowPopularMovies();
    },[])
    return(
        <div>

        </div>
    )
}

export default usePopularMovies;
