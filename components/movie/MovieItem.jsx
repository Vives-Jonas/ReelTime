import { StyleSheet, Image, Text,View,  TouchableOpacity, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const starIcon = require('../../assets/star.png');

export const MovieItem = ({ movie }) => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('Details', { id: movie.id });
    };

  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <Image
        source={{ uri: `https://image.tmdb.org/t/p/w154${movie.poster_path}` }}
        style={styles.image}
        resizeMode="cover"
      />      
      <ImageBackground source={starIcon} style={styles.starIcon}>
        <Text style={styles.movieRating}>{movie.vote_average.toFixed(1)}</Text>
      </ImageBackground>

      <View style={styles.info}>
        <Text style={styles.movieTitle} numberOfLines={2}>{movie.title}</Text>
        <Text style={styles.movieGenres}>{movie.genres?.join(', ') || 'Unknown Genre'}</Text>
        
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 8,
    borderRadius: 8,
    backgroundColor: '#fff',
    width: 140,    
    overflow: 'hidden',
  },
  image: {
    width: 140,
    height: 210, 
    backgroundColor: '#f0f0f0',
  },
  info: {
    padding: 8,
    height: 80, 
    justifyContent: 'space-evenly',
    alignItems: 'flex-start',
  },
  movieTitle: {
    fontSize: 13,
    fontWeight: '600',
    color: '#333',
    minHeight: 38,
  },
  ratingContainer: {
    position: 'absolute',
    top: 8,
    right: 8,
    flexDirection: 'row', 
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)', 
    paddingHorizontal: 6,
    paddingVertical: 4,
    borderRadius: 12,
  },
  starIcon: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 4,
    right: 4,
    width: 40,
    height: 40,
    opacity: 0.9,
  },
  movieRating: {
    fontSize: 12,
    color: '#0a0a0aff', 
    fontWeight: '600',
  },
  movieGenres: {
    fontSize: 12,
    color: '#999',
  },
});