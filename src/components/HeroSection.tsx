import axiosInstance from '../axiosConfig';
import './css/HeroSection.css'
import { useEffect, useState } from 'react'
import { IMAGE_ROOT_URL } from '../consts.tsx';


interface Movie {

    id: number;
    adult: boolean;
    original_title: string;
    poster_path: string;
    video: boolean;

}

interface MovieResponse {

    results: Movie[];
    total_pages: number;

}


const HeroSection = () => {

    const [topRated, setTopRated] = useState<Movie[]>([])
    const [maxPage, setMaxPage] = useState(481)

    useEffect(() => {

        let page = Math.floor(Math.random() * maxPage) + 1

        //while (page <= maxPage) {

            axiosInstance.get<MovieResponse>(
                `/top_rated?page=${page}`
            ).then(response => {

                setMaxPage(response.data.total_pages)
                console.log(maxPage)

                const videoFilms = response.data.results.filter((movie) => {

                    return !movie.video

                })

                setTopRated(videoFilms)
                console.log(topRated)

            }).catch((error) => {
                console.error(`Error: ${error}`)
            })

            //page++;

        //}

    }, [])


    return (
        
        <div className="moviesList">

            { 
            
                topRated.length > 0 
                ? (
                    topRated.map((movie, index) => (

                        <div className='movieContainer' key={movie.id}>
                            
                            <img src={ `${IMAGE_ROOT_URL}${movie.poster_path}` } alt="" />
                            {/* <h5>{ movie.original_title }</h5>
                            <p>Adult: { movie.adult }</p> */}
                        </div>

                    ))
                  )
                : (
                    <h1> No hay películas </h1>
                
                    )
            }

        </div>

    )
    
}

export default HeroSection