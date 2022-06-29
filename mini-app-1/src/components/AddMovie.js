import {useState, useContext} from 'react'
import MovieContext from './MovieContext'
import config from '../config'
const ApiUrl = config[process.env.REACT_APP_NODE_ENV || "development"].apiUrl;

const AddMovie = (props)=>{
    let [input, setInput] = useState([])
    let {movies, update, setUpdate} = useContext(MovieContext)

    let handleChange = (e) => {
        setInput(e.target.value)
    }
    
    const handleSubmit = async (event) => { 
        event.preventDefault()
        const id = movies.reduce((max, movie) => (movie.id > max ? movie.id : max), 0) + 1
        let body = {id: id, name : input}
        console.log(body)

        let res = await fetch(`${ApiUrl}movies`, {
              method: "POST",
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(body),
        });
        console.log(res)
        props.callback(5)
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