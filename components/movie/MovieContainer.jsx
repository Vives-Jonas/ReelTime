import { View, StyleSheet,Text } from 'react-native';
import { MovieList } from './MovieList';

export const MovieContainer = ({ movies }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Movies</Text>
      <MovieList movies={movies}  />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    margin: 16,
  },
});