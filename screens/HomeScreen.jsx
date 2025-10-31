import {  StyleSheet,ScrollView } from 'react-native';
import { useEffect, useState } from 'react';
import { MovieContainer } from '../components/movie/MovieContainer';
import { SearchBar } from '../components/ui/SearchBar';
import { getPopularMovies, getTopRatedMovies } from '../data/api';

export const HomeScreen = ({  }) => {
  
  const [popularMovies, setPopularMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState(false);

  // Filter function that can be reused
  const applyFilters = (movies) => {
    return movies.filter(movie => {
      const matchesSearch = movie.title.toLowerCase().includes(search.toLowerCase());
      const matchesFilter = !filter|| movie.vote_average >= 7;
      return matchesSearch && matchesFilter;
    });
  };

  useEffect(() => {
    const loadMovies = async () => {
      const [popular, topRated] = await Promise.all([
        getPopularMovies(),
        getTopRatedMovies()
      ]);
      setPopularMovies(popular);
      setTopRatedMovies(topRated);
    };

    loadMovies();
  }, []);


  return (
    <ScrollView style={styles.container}>
      <SearchBar searchValue={search} onChangeText={setSearch} filterValue={filter} onValueChange={setFilter} />
            
      <MovieContainer 
        title="Popular Movies" 
        movies={applyFilters(popularMovies)} 
      />
      
      <MovieContainer 
        title="Top Rated Movies" 
        movies={applyFilters(topRatedMovies)} 
      /></ScrollView>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 60,
  },
});