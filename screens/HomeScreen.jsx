
import {  StyleSheet } from 'react-native';
import { useEffect, useState } from 'react';
import { MovieContainer } from '../components/movie/MovieContainer';
import { getPopularMovies } from '../data/api';

export const HomeScreen = ({  }) => {
  const [movies, setMovies] = useState([]);

  // useEffect(() => {
  //    const movies = getPopularMovies();
  //     setMovies(movies);
  // }, []);

  useEffect(() => {
    const fetchMovies = async () => {
      const moviesData = await getPopularMovies();
      setMovies(moviesData);
    };
    
    fetchMovies();
  }, []);

  return (
    <MovieContainer movies={movies} />
  );
};



const styles = StyleSheet.create({
  
});