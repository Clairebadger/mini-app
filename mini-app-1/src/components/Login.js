import MovieContext from "./MovieContext";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import config from '../config'
const ApiUrl = config[process.env.REACT_APP_NODE_ENV || "development"].apiUrl;

const Login = () => {

    let {isAuthenticated, setIsAuthenticated} = useContext(MovieContext)
    let [input, setInput] = useState({email:"", password:""})

    let handleChange = (e) => {
        const value = e.target.value;
        setInput({
          ...input,
          [e.target.name]: value
        });
        e.preventDefault();
    }

    const handleSubmit = (e) =>{
        
        console.log("working...?")
        fetch(`${ApiUrl}/login`, {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(input),
        })
        .then(res => {
            console.log(res)
            if(res.status ===200){
                setIsAuthenticated(true)
                console.log("success")
            }
            else{
                console.log("not success")
            }}
        )
        e.preventDefault()
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <ul>
                    <li className = 'list-element'>
                        <label>
                          Email: 
                          <input type="text" name = "email" value = {input.email} onChange = {handleChange} required="required"/>
                        </label>
                    </li>
                    <li className = 'list-element'>
                        <label>
                          Password:
                          <input type="text" name = "password" value = {input.password} onChange = {handleChange} required="required"/>
                        </label>
                    </li>
                </ul>
                <button className = 'submitButton' type="submit" value="Submit">Submit</button>
            </form>
        </>
    )
}

export default Login