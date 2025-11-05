import { View, StyleSheet, Text, ActivityIndicator } from 'react-native';
import { FlashList } from '@shopify/flash-list';
import { MovieItem } from './MovieItem';
import { theme } from '../../styles/theme.styles';

const { colors, typography } = theme;

export const MovieList = ({ movies, loading, error}) => {
  
  if (loading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.centered}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );
  }

  if (!movies || movies.length === 0) {
    return (
      <View style={styles.centered}>
        <Text style={styles.emptyText}>No movies available</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlashList
        data={movies}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <MovieItem movie={item} />
        )}
        keyExtractor={(item) => `movie-${item.id}`}
        
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  title: {
    fontSize: typography.title,
    fontWeight: 'bold',
    margin: 16,
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
  emptyText: {
    fontSize: typography.medium,
    color: colors.textPrimary,
  },

});