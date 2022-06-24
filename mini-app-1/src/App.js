import MovieList from './components/MovieList';
import {useState, useEffect} from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header.js';
import LandingPage from './components/LandingPage';
import MovieContext from './components/MovieContext';
import SearchPage from './components/SearchPage'

function App() {
  let [movies, setMovies] = useState([])
  let [originalLength, setOriginalLength] = useState(0)
  
  useEffect(()=>{
    fetch ('http://localhost:8080/movies')
    .then (res => res.json())
    .then (data => {
        console.log(data)
        setMovies(data)
        setOriginalLength(data.length)
    })
},[])

  return (
    <MovieContext.Provider value = {{movies, setMovies,originalLength}}>
    <Router>
      <Header/>
      <Routes>
        <Route path = '/' element ={<LandingPage/>}> </Route>
        <Route path = '/movies' element = {<MovieList/>}></Route>
        <Route path = '/search/:name' element = {<SearchPage/>}></Route>
        <Route path = '/*' element = {<LandingPage/>}></Route>
      </Routes>
    </Router>
    </MovieContext.Provider>
  );
}

export default App;
