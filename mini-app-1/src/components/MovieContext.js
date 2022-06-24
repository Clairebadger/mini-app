import React from 'react'
const MovieContext = React.createContext({
    movies: [],
    setMovies : () => {},
    originalLength : 0
  });

  export default MovieContext

