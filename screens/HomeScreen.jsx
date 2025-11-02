import {  StyleSheet,ScrollView } from 'react-native';
import { useEffect, useState } from 'react';
import { MovieContainer, SearchBar } from '../components';
import { getPopularMovies, getTopRatedMovies } from '../data/api';

export const HomeScreen = () => {
  
  const [popularMovies, setPopularMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [search, setSearch] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState('');
  const [filter, setFilter] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  
  const applyFilters = (movies) => {
    return movies.filter(movie => {
      const matchesSearch = movie.title.toLowerCase().includes(debouncedSearch.toLowerCase());
      const matchesFilter = !filter|| movie.vote_average >= 7;
      return matchesSearch && matchesFilter;
    });
  };

  useEffect(() => {
    const loadMovies = async () => {
      try {
        setLoading(true);
        setError(null);
        const [popular, topRated] = await Promise.all([
          getPopularMovies(),
          getTopRatedMovies()
        ]);
        setPopularMovies(popular);
        setTopRatedMovies(topRated);
        console.log('Movies loaded successfully');
      } catch (err) {
        setError('Failed to load movies');
        console.error('Error loading movies:', err);
      } finally {
        setLoading(false);
      }
    };

    loadMovies();

    return () => {
    console.log('HomeScreen unmounted - Cleaning up...');
  };
  }, []);

  useEffect(() => {
    console.log('[EFFECT] Filters changed:', { search, filter });
  }, [search, filter]);

useEffect(() => {
    console.log('[EFFECT] Search input changed, starting 500ms delay...');
    
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
      console.log('[EFFECT] Delay complete, updating search to:', search);
    }, 500); 
    
    return () => {
      console.log('[CLEANUP] User still typing, canceling previous timer');
      clearTimeout(timer);
    };
  }, [search]);

  return (
    <ScrollView style={styles.container}>
      <SearchBar searchValue={search} onChangeText={setSearch} filterValue={filter} onValueChange={setFilter} />
            
      <MovieContainer 
        title="Popular Movies" 
        movies={applyFilters(popularMovies)} 
        loading={loading}
        error={error}
      />
      
      <MovieContainer 
        title="Top Rated Movies" 
        movies={applyFilters(topRatedMovies)} 
        loading={loading}
        error={error}
      />
    </ScrollView>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 60,
  },
});