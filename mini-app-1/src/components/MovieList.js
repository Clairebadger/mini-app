import {useContext, useEffect, useState} from 'react'
import MovieContext from './MovieContext';
import RemoveMovie from './RemoveMovie.js';
import AddMovie from './AddMovie.js';
import config from '../config'
const ApiUrl = config[process.env.REACT_APP_NODE_ENV || "development"].apiUrl;

const MovieList = () => {
    let {movies, setMovies, originalLength} = useContext(MovieContext)
    let [update, setUpdate] = useState(0)

    console.log(originalLength)
    useEffect(()=>{
        fetch (`${ApiUrl}movies`)
        .then (res => res.json())
        .then (data => {
            console.log(data)
            setMovies(data)
        })
    },[update])


    return (
        <div>
            <div className='inputButton'><RemoveMovie callback = {setUpdate}/></div>
            <div className='inputButton'><AddMovie callback = {setUpdate}/></div>
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