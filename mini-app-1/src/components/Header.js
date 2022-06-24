//implement header and search bar
import SearchBar from './SearchBar.js'
import { Link } from "react-router-dom";
import "./Header.css";
import RemoveMovie from './RemoveMovie.js';
import AddMovie from './AddMovie.js';

const Header = () => {
    return (
        <div className='header'>
            <div  className="navButtons">    
            <Link to="/">
                <div className='clickButton'>
                    <button> Home </button>
                </div>
            </Link>
            <Link to="/movies">
                <div className='clickButton'>
                    <button> Movie List </button>
                </div>
            </Link>
            <div className='inputButton'><SearchBar/></div>
            <div className='inputButton'><RemoveMovie/></div>
            <div className='inputButton'><AddMovie/></div>
            </div>
        </div>
    )
}

export default Header