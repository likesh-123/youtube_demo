import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import MovieContainer from './MovieContainer';
import Comment from './Comment';
const YouTubeContainer = ({ videoId }) => {
    return (
        <div className='w-[800px] h-[400px]'>
            <div className='h-full w-full'>
                <iframe className="w-[800px] h-[400px]" src={videoId} title="YouTube video player" allowFullScreen></iframe>
            </div>
        </div>
    );
};

function WatchContainer() {
    const { id } = useParams();
    const [currentMovie, setCurrentMovie] = useState("")

    useEffect(() => {
        try {
            fetch(`https://streamify-be.onrender.com/api/movies/${id}`)
                .then(async (response) => {
                    const moviesResponse = await response.json();
                    moviesResponse.pageLink = `https://www.youtube.com/embed/${moviesResponse.pageLink}`
                    setCurrentMovie(moviesResponse)
                }).catch(e => {
                }) 

        } catch (error) {
            // setError(error);
        }
    }, [id])
    return (
        <div className="flex flex-col justify-center items-center h-full m-2">
            <div className='flex items-center'>
                <YouTubeContainer videoId={currentMovie.pageLink} />
                <Comment/>
            </div>
            
            <MovieContainer />
            
        </div>
    )
}

export default WatchContainer