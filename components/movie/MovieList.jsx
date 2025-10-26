import { View, Text, StyleSheet } from 'react-native';
import { FlashList } from '@shopify/flash-list';
import { MovieItem } from './MovieItem';

export const MovieList = ({ movies, navigation }) => {
  return (
    <View style={styles.container}>
      <FlashList
        data={movies}
        renderItem={({ item }) => (
          <MovieItem movie={item} navigation={navigation} />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  movieItem: {
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  movieTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  movieYear: {
    fontSize: 14,
    color: '#666',
  },
});
  