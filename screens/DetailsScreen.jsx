import { View, StyleSheet, ActivityIndicator } from 'react-native';
import { useEffect, useState } from 'react';
import { MovieDetails} from '../components';
import { getMovie } from '../data/api';

import { theme } from '../styles/theme.styles';

const { colors, typography } = theme;

export const DetailsScreen = ({ route }) => {
  const { id } = route.params;
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
   
      const fetchMovie = async () => {
        try {
        setLoading(true);
        setError(null);
        const movieData = await getMovie(id);
        await new Promise((resolve) => setTimeout(resolve, 2000));
        setMovie(movieData);
      } catch (err) {
        setError('Failed to load movie details');
      } finally {
        setLoading(false);
      }
    };
    
    fetchMovie();
  }, [id]);


  return (
  <View style={styles.container}>
    {loading ? (
      <ActivityIndicator size="large"ActivityIndicator color="#0000ff" style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} />
    ) : error ? (
        <View style={styles.centered}>
          <Text style={styles.errorText}>{error}</Text>
        </View>
      ) :(
      <MovieDetails movie={movie} />
    )}
  </View>
);
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    color: colors.error,
    fontSize: typography.medium,
  },
});