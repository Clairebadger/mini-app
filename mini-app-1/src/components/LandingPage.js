//landing page
import MovieContext from "./MovieContext"
import { useContext } from "react"
import { Link } from 'react-router-dom'
import SignUp from "./SignUp"

const LandingPage = () => {
   let {isAuthenticated} = useContext(MovieContext)

     return (
      <>
      { 
         isAuthenticated ? 

         <div>
            This is the Landing Page!
         </div>

      :
         <div>
            <SignUp/>
            Already signed up? Login 
            <Link to="/login">
               Here
            </Link>
         </div>
      }
     </>
     )
}

export default LandingPage