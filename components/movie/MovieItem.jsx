import { StyleSheet, Image, Text,View,  TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { theme } from '../../styles/theme.styles';

const starIcon = require('../../assets/star.png');
const { colors, typography } = theme;

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
      <View style={styles.ratingContainer}>
        <Image source={starIcon} style={styles.starIcon} />
        <Text style={styles.movieRating}>{movie.vote_average.toFixed(1)}</Text>
      </View>

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
    backgroundColor: colors.surface,
    width: 160,    
    overflow: 'hidden',
    alignItems: 'center',
  },
  image: {
    marginTop: 8,
    width: 140,
    height: 210,
    borderRadius: 8,
  },
  info: {
    padding: 8,
    height: 100, 
    justifyContent: 'space-around',
    alignItems: 'flex-start',
  },
  movieTitle: {
    fontSize: typography.medium,
    fontWeight: '600',
    color: colors.textPrimary,
    minHeight: 38,
  },
  ratingContainer: {
    position: 'absolute',
    top: 14,
    right: 14,
    flexDirection: 'row', 
    alignItems: 'center',
    backgroundColor: colors.surfaceOpaque, 
    paddingHorizontal: 6,
    paddingVertical: 4,
    borderRadius: 12,
  },
  starIcon: {
    width: 14,
    height: 14, 
    marginRight: 4,   
  },
  movieRating: {
    fontSize: typography.small,
    color: colors.textWhite, 
    fontWeight: '600',
  },
  movieGenres: {
    fontSize: typography.small,
    color: colors.textMuted,
  },
});