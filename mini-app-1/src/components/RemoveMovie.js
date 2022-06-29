import {useState} from 'react'
import config from '../config'
const ApiUrl = config[process.env.REACT_APP_NODE_ENV || "development"].apiUrl;

const RemoveMovie = (props)=>{
    let [input, setInput] = useState([])

    let handleChange = (e) => {
        setInput(e.target.value)
        console.log(input)
    }
    
    const handleSubmit = async (event) => { 
        event.preventDefault()
        //edit body here
        console.log(input)
        let res = await fetch(`${ApiUrl}movies/${input}`, {method: "DELETE"})
            .then(() => console.log('Delete successful'))
        console.log(res)
        props.callback(10)
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