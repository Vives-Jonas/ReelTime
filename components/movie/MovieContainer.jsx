import { View, StyleSheet } from 'react-native';
import { MovieList } from './MovieList';

export const MovieContainer = ({ movies }) => {
  return (
    <View style={styles.container}>
      <MovieList movies={movies}  />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});