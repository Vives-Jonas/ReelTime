import {  StyleSheet,ScrollView } from 'react-native';
import { useEffect, useState } from 'react';
import { MovieContainer, SearchBar } from '../components';
import { getPopularMovies, getTopRatedMovies } from '../data/api';

export const HomeScreen = () => {
  
  
  const [movies, setMovies] = useState({ popular: [], topRated: [] });
  const [search, setSearch] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState('');
  const [filter, setFilter] = useState(false);
  const [loading, setLoading] = useState({ popular: true, topRated: true });
  const [error, setError] = useState({ popular: null, topRated: null });

  
  const applyFilters = (movieList) => {
    return movieList.filter(movie => {
      const matchesSearch = movie.title.toLowerCase().includes(debouncedSearch.toLowerCase());
      const matchesFilter = !filter|| movie.vote_average >= 7;
      return matchesSearch && matchesFilter;
    });
  };

  useEffect(() => {
  const loadMovies = async () => {
    setLoading({ popular: true, topRated: true });
    setError({ popular: null, topRated: null });
    
    const [popularResult, topRatedResult] = await Promise.allSettled([
      getPopularMovies(),
      getTopRatedMovies()
    ]);

    if (popularResult.status === 'fulfilled') {
      setMovies(prev => ({ ...prev, popular: popularResult.value }));
    } else {
      console.error('Popular movies error:', popularResult.reason);
      setMovies(prev => ({ ...prev, popular: [] }));
      setError(prev => ({ ...prev, popular: 'Failed to load popular movies' }));
    }
    setLoading(prev => ({ ...prev, popular: false }));

    if (topRatedResult.status === 'fulfilled') {
      setMovies(prev => ({ ...prev, topRated: topRatedResult.value }));
    } else {
      console.error('Top rated movies error:', topRatedResult.reason);
      setMovies(prev => ({ ...prev, topRated: [] }));
      setError(prev => ({ ...prev, topRated: 'Failed to load top-rated movies' }));
    }
    setLoading(prev => ({ ...prev, topRated: false }));
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
        title='Popular Movies' 
        movies={applyFilters(movies.popular)} 
        loading={loading.popular}
        error={error.popular}
      />
      
      <MovieContainer 
        title='Top Rated Movies' 
        movies={applyFilters(movies.topRated)} 
        loading={loading.topRated}
        error={error.topRated}
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