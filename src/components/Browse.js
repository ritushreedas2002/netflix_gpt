import { useSelector } from "react-redux";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import GptSearch from "./GptSearchPage";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";


const Browse=()=>{
    useNowPlayingMovies();
    usePopularMovies();
    const gptsearch=useSelector(store=>store.gpt.showGptSearch);
    return (
        <div>
            <Header/>
            {gptsearch ? <GptSearch/>:<>
            <MainContainer/>
            <SecondaryContainer/>
            </>}
            
        </div>
    )
}
export default Browse;