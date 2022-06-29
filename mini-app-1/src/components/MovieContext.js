import React from 'react'
const MovieContext = React.createContext({
    movies: [],
    setMovies : () => {},
    originalLength : 0,
    isAuthenticated : null,
    setIsAuthenticated : () => {}
  });

  export default MovieContext

