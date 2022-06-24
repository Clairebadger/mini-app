import {useState} from 'react'

const RemoveMovie = ()=>{
    let [input, setInput] = useState([])

    let handleChange = (e) => {
        setInput(e.target.value)
        console.log(input)
    }
    
    const handleSubmit = async (event) => { 
        event.preventDefault()
        //edit body here
        console.log(input)
        let res = await fetch(`http://localhost:8080/movies/${input}`, {method: "DELETE"})
            .then(() => console.log('Delete successful'))
        console.log(res)
    }

    return (
        <div>
            <input type="text" onChange={ handleChange } />
            <input
                type="button"
                value= "Remove Movie"
                onClick={handleSubmit}
            />
        </div>
    )
}

export default RemoveMovie