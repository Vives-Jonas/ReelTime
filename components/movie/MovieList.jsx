import { View, Text, StyleSheet } from 'react-native';
import { FlashList } from '@shopify/flash-list';
import { MovieItem } from './MovieItem';

export const MovieList = ({ movies, navigation }) => {
  return (
    <View style={styles.container}>
      <FlashList
        data={movies}
        horizontal
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
 
  
});
  