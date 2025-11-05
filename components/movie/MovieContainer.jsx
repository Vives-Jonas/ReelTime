import { View, StyleSheet,Text } from 'react-native';
import { MovieList } from './MovieList';

import { theme } from '../../styles/theme.styles';

const {  typography } = theme;

export const MovieContainer = ({ title, movies, loading, error }) => {
  
  return (
    
    <View>
      <Text style={styles.title}>{title}</Text>
      <MovieList movies={movies} loading={loading} error={error} />
    </View>
  );
};

const styles = StyleSheet.create({
  
  title: {
    fontSize: typography.title,
    fontWeight: 'bold',
    margin: 16,
  },
});


