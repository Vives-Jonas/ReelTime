import { View,Text, StyleSheet, ActivityIndicator } from 'react-native';
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
      setLoading(true);
      setError(null);

      try {
        const data = await getMovie(id);
        setMovie(data);
      } catch (err) {
        console.error('DetailsScreen error:', err);
        setError(err.message || 'Failed to load movie details');
      } finally {
        setLoading(false);
      }
    };

    fetchMovie();
  }, [id]);

  if (loading)
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color={colors.primary || "#0000ff"} />
      </View>
    );

  if (error)
    return (
      <View style={styles.centered}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );

  if (!movie)
    return (
      <View style={styles.centered}>
        <Text>No movie found.</Text>
      </View>
    );

  return (
    <View style={styles.container}>
      <MovieDetails movie={movie} />
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