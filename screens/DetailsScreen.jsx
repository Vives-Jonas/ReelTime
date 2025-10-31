import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { useEffect, useState } from 'react';
import { MovieDetails} from '../components/movie/MovieDetails';
import { getMovie } from '../data/api';

export const DetailsScreen = ({ route }) => {
  const { id } = route.params;
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
   
      const fetchMovie = async () => {
      setLoading(true);
      const movieData = await getMovie(id);
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setMovie(movieData);
      setLoading(false);
    };
    
    fetchMovie();
  }, [id]);


  return (
  <View style={styles.container}>
    {loading ? (
      <ActivityIndicator size="large"ActivityIndicator color="#0000ff" style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} />
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