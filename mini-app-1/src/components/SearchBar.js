import {useState} from 'react'
import {useNavigate} from 'react-router-dom'

//navigate to Movies
const SearchBar = () =>{
    let [input, setInput] = useState([])
    let navigate = useNavigate()


    let handleChange = (e) => {
        setInput(e.target.value)
        console.log(input)
    }
    let handleSubmit = () => {
        /*
        let movieArr = movies.filter(movie => {
            console.log(movie)
            return (movie.includes(input))
        })*/
        navigate(`/search/${input}`)
    }

    return (
        <div>
            <input type="text" onChange={ handleChange } />
            <input
                type="button"
                value= "Search me"
                onClick={handleSubmit}
            />
        </div>
    )
}

export default SearchBar