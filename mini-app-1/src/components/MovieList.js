import {useContext} from 'react'
import MovieContext from './MovieContext';

const dummyMovies = [
    {title: 'Mean Girls'},
    {title: 'Hackers'},
    {title: 'The Grey'},
    {title: 'Sunshine'},
    {title: 'Ex Machina'},
  ];

const MovieList = () => {
    let {movies} = useContext(MovieContext)

    return (
        movies.map(ele => {
            return(
                <div>
                    Title: {ele}
                </div>
            )
        })
    )
}

export default MovieList