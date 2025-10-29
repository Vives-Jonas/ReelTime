import { View, StyleSheet } from 'react-native';
import { FlashList } from '@shopify/flash-list';
import { MovieItem } from './MovieItem';
import { theme } from '../../styles/theme.styles';

const { colors, typography } = theme;

export const MovieList = ({ movies }) => {
  

  

  return (
    <View style={styles.container}>
      
      
      <FlashList
        data={movies}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <MovieItem movie={item} />
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

  title: {
    fontSize: typography.title,
    fontWeight: 'bold',
    margin: 16,
  },

});