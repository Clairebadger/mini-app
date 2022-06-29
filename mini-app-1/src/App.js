import MovieList from './components/MovieList';
import {useState, useEffect} from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header.js';
import LandingPage from './components/LandingPage';
import MovieContext from './components/MovieContext';
import SearchPage from './components/SearchPage'
import Login from './components/Login';
import config from './config'
const ApiUrl = config[process.env.REACT_APP_NODE_ENV || "development"].apiUrl;


function App() {
  console.log(ApiUrl)
  let [movies, setMovies] = useState([])
  let[isAuthenticated, setIsAuthenticated] = useState(false)
  let [originalLength, setOriginalLength] = useState(0)
  
  
  useEffect(()=>{
    fetch (`${ApiUrl}/movies`)
    .then (res => res.json())
    .then (data => {
        console.log(data)
        setMovies(data)
        setOriginalLength(data.length)
    })
},[])

  return (
    <MovieContext.Provider value = {{movies, setMovies,originalLength, isAuthenticated, setIsAuthenticated}}>
    <Router>
      <Header/>
      <Routes>
        <Route path = '/' element ={<LandingPage/>}> </Route>
        <Route path = '/login' element ={<Login/>}> </Route>
        <Route path = '/movies' element = {<MovieList/>}></Route>
        <Route path = '/search/:name' element = {<SearchPage/>}></Route>
        <Route path = '/*' element = {<LandingPage/>}></Route>
      </Routes>
    </Router>
    </MovieContext.Provider>
  );
}

export default App;