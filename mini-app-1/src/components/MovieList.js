import {useContext, useState, useEffect} from 'react'
import MovieContext from './MovieContext';

const MovieList = () => {
    let {movies, setMovies, originalLength} = useContext(MovieContext)
    console.log(originalLength)
    useEffect(()=>{
        fetch ('http://localhost:8080/movies')
        .then (res => res.json())
        .then (data => {
            console.log(data)
            setMovies(data)
        })
    },[])


    return (
        <div>
            {movies.map((ele) => {
                if (ele.id == originalLength){
                    return (
                        <>
                        <div><b>User added Movies:</b></div>
                        <div>
                            Title: {ele.name}
                        </div>
                        </>
                    )
                }
                else{
                    return(
                        <div>
                            Title: {ele.name}
                        </div>
                    )
                }
            })}
        </div>
    )
}

export default MovieList