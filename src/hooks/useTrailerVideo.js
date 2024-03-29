import { useDispatch, useSelector} from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const useTrailerVideo=(movieId)=>{
    const trailerVideo=useSelector(store=>store.movies.trailerVideo);
    const dispatch=useDispatch();
    const getMovieVideos=async()=>{
        const data=await fetch('https://api.themoviedb.org/3/movie/'+movieId+'/videos?language=en-US',API_OPTIONS)
        const json =await data.json();

        const filterData=json.results.filter((video)=>video.type==="Trailer"); //contains many trailer so choose one
        const trailer=filterData.length===0?filterData[0]:json.results[0];
        dispatch(addTrailerVideo(trailer));
    }

    useEffect(()=>{
        //memoisation----as updated in redux store so nothing to call the api multiple times
        !trailerVideo && getMovieVideos();
    },[])
}

export default useTrailerVideo;