import { useState } from "react";
import config from '../config'
const ApiUrl = config[process.env.REACT_APP_NODE_ENV || "development"].apiUrl;

const SignUp = () => {

    let [input, setInput] = useState({usernamesignup: "", emailsignup:"", passwordsignup:""})

    let handleChange = (e) => {
        const value = e.target.value;
        setInput({
          ...input,
          [e.target.name]: value
        });
        e.preventDefault();
    }

    const handleSubmit = () =>{
        
        fetch(`${ApiUrl}/signup`, {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(input),
        })
        .then(res =>{
            if(res.status ===200){
                console.log("success")
            }
            else{
                console.log("not success")
            }
        })
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <ul>
                <li className = 'list-element'>
                        <label>
                          Username: 
                          <input type="text" name = "usernamesignup" value = {input.usernamesignup} onChange = {handleChange} required="required"/>
                        </label>
                    </li>
                    <li className = 'list-element'>
                        <label>
                          Email: 
                          <input type="text" name = "emailsignup" value = {input.emailsignup} onChange = {handleChange} required="required"/>
                        </label>
                    </li>
                    <li className = 'list-element'>
                        <label>
                          Password:
                          <input type="text" name = "passwordsignup" value = {input.passwordsignup} onChange = {handleChange} required="required"/>
                        </label>
                    </li>
                </ul>
                <button className = 'submitButton' type="submit" value="Submit">Submit</button>
            </form>
        </>
    )
}

export default SignUp