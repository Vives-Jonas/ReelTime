import { View, StyleSheet,Text } from 'react-native';
import { MovieList } from './MovieList';

import { theme } from '../../styles/theme.styles';

const {  typography } = theme;

export const MovieContainer = ({ title, movies}) => {
  return (
    
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <MovieList movies={movies}  />
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


