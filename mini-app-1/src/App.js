import MovieList from './components/MovieList';
import {useEffect, useState} from 'react' 
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header.js';
import LandingPage from './components/LandingPage';
import MovieContext from './components/MovieContext';

function App() {
  let [movies, setMovies] = useState([])

    useEffect(()=>{
        fetch ('http://localhost:8080/movies')
        .then (res => res.json())
        .then (data => {
            console.log(data)
            setMovies(data)
        })
    },[])

  return (
    <MovieContext.Provider value = {{movies, setMovies}}>
    <Router>
      <Header/>
      <Routes>
        <Route path = '/'><LandingPage/></Route>
        <Route path = '/movies'><MovieList/></Route>
        <Route path = '/*'><LandingPage/></Route>
      </Routes>
    </Router>
    </MovieContext.Provider>
  );
}

export default App;
