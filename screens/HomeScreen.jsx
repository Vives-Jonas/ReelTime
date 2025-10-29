import {  StyleSheet,ScrollView } from 'react-native';
import { useEffect, useState } from 'react';
import { MovieContainer } from '../components/movie/MovieContainer';
import { SearchBar } from '../components/ui/SearchBar';
import { getPopularMovies, getTrendingMovies } from '../data/api';

export const HomeScreen = ({  }) => {
  
  const [popularMovies, setPopularMovies] = useState([]);
  const [trendingMovies, setTrendingMovies] = useState([]);
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
    const fetchMovies = async () => {
      const [popular, trending] = await Promise.all([
        getPopularMovies(),
        getTrendingMovies()
      ]);
      setPopularMovies(popular);
      setTrendingMovies(trending);
    };
    
    fetchMovies();
  }, []);


  return (
    <ScrollView style={styles.container}>
      <SearchBar searchValue={search} onChangeText={setSearch} filterValue={filter} onValueChange={setFilter} />
            
      <MovieContainer 
        title="Popular Movies" 
        movies={applyFilters(popularMovies)} 
      />
      
      <MovieContainer 
        title="Trending Now" 
        movies={applyFilters(trendingMovies)} 
      /></ScrollView>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 60,
  },
});