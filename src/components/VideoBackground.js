
import { useSelector } from 'react-redux';
import useTrailerVideo from '../hooks/useTrailerVideo';

const VideoBackground=({movieId})=>{
    
    
    const trailorVideo=useSelector(store=>store.movies?.trailerVideo);
    //fetching data doing filtering and updating the sore
    useTrailerVideo(movieId);
    
    return(
        <div className='w-screen'>
           <iframe className='w-screen aspect-video h-screen'  src={"https://www.youtube.com/embed/"+ trailorVideo?.key +"?autoplay=1&mute=1" }
            title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            ></iframe>

        </div>
    )
}
export default VideoBackground;