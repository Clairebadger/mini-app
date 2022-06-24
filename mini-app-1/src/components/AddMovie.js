import {useState, useContext} from 'react'
import MovieContext from './MovieContext'

const AddMovie = ()=>{
    let [input, setInput] = useState([])
    let {movies} = useContext(MovieContext)

    let handleChange = (e) => {
        setInput(e.target.value)
        console.log(input)
    }
    
    const handleSubmit = async (event) => { 
        event.preventDefault()
        const id = movies.reduce((max, movie) => (movie.id > max ? movie.id : max), 0) + 1
        let body = {id: id, name : input}
        console.log(body)

        let res = await fetch(`http://localhost:8080/movies`, {
              method: "POST",
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(body),
        });
        console.log(res)
    }

    return (
        <div>
            <input type="text" onChange={ handleChange } />
            <input
                type="button"
                value= "Add Movie"
                onClick={handleSubmit}
            />
        </div>
    )
}

export default AddMovie