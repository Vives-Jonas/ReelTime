import { View, Text, StyleSheet } from 'react-native';
import { useEffect, useState } from 'react';
import { MovieDetails} from '../components/movie/MovieDetails';
import { getPopularMovie } from '../data/api';

export const DetailsScreen = ({ route }) => {
  const { id } = route.params;
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
   
      const fetchMovie = async () => {
      setLoading(true);
      const movieData = await getPopularMovie(id);
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setMovie(movieData);
      setLoading(false);
    };
    
    fetchMovie();
  }, [id]);


  
    return (
  <View style={styles.container}>
    {loading ? (
      <Text>Loading...</Text>
    ) : (
      <MovieDetails movie={movie} />
    )}
  </View>
);
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});