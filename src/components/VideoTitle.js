const VideoTitle=({title,overview})=>{
    return(
        <div className=" w-screen h-screen aspect-video absolute text-white pt-[15%] px-24 bg-gradient-to-r from-black">
            <h1 className="text-4xl font-bold">{title}</h1>
            <p className="py-6 text-s w-1/4">{overview}</p>

            <div>
                <button className="bg-white text-black p-4 px-12 text-xl rounded-lg hover:bg-opacity-80">Play</button>
                <button className="bg-gray-500 mx-3 text-white p-4 px-12 text-xl bg-opacity-50 rounded-lg hover:bg-white">More Info</button>
            </div>
        </div>
    )
}
export default VideoTitle;