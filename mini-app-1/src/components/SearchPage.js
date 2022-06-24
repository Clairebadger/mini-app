import {useContext} from 'react'
import AddMovie from './AddMovie';
import { useParams } from 'react-router-dom';
import MovieContext from './MovieContext';

const SearchPage = () => {
    let {movies} = useContext(MovieContext)
    const name = useParams().name
    console.log(name)

    let searchedMovies = movies.filter(ele => ele.name.includes(name))

    return (
        <div>
            {searchedMovies.map(ele => {
                return(
                    <div>
                        Title: {ele.name}
                    </div>
                )
            })}
        </div>
    )
}

export default SearchPage