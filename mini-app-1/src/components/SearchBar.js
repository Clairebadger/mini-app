import {useState, useContext} from 'react'
import {useNavigate} from 'react-router-dom'
import MovieContext from './MovieContext'

//navigate to Movies
const SearchBar = () =>{
    let [input, setInput] = useState([])
    let {movies, setMovies} = useContext(MovieContext)
    let navigate = useNavigate()

    let handleChange = (e) => {
        setInput(e.target.value)
    }
    let handleSubmit = () => {
        let movieArr = movies.filter(movie => {
            return (movie.name.includes(input))
        })
        setMovies(movieArr)
        navigate('/movies')
    }

    return (
        <div>
            <input type="text" onChange={ handleChange } />
            <input
                type="button"
                value= {input}
                onClick={handleSubmit}
            />
        </div>
    )
}

export default SearchBar