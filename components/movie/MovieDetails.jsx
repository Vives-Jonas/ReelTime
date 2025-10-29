import { ScrollView, Image, View, Text, StyleSheet } from 'react-native';
import { StatItem } from '../ui/StatItem';
import { theme } from '../../styles/theme.styles';

const { colors, typography } = theme;

export const MovieDetails = ({ movie }) => {

  return (
   <View style={styles.container}>      
      <View style={styles.heroSection}>
        <Image 
          source={{ uri: `https://image.tmdb.org/t/p/w780${movie.backdrop_path}` }}
          style={styles.backdrop}
        />
        
        <View style={styles.titleSection}>
          <Image 
            source={{ uri: `https://image.tmdb.org/t/p/w154${movie.poster_path}` }}
            style={styles.poster}
          />
          <View style={styles.titleInfo}>
            <Text style={styles.title}>{movie.title}</Text>
            <Text style={styles.tagline}>{movie.tagline}</Text>
          </View>
        </View>
      </View>

      <View style={styles.statsBar}>
        <StatItem icon={require('../../assets/star.png')} value={movie.vote_average.toFixed(1)} />
        <StatItem icon={require('../../assets/calendar.png')} value={new Date(movie.release_date).getFullYear()} />
        <StatItem icon={require('../../assets/stopwatch.png')} value={`${movie.runtime} min`} />
      </View>

      {/* Genres */}
      <View style={styles.genresContainer}>
        {movie.genres.map(genre => (
          <View key={genre.id} style={styles.genreChip}>
            <Text style={styles.genreText}>{genre.name}</Text>
          </View>
        ))}
      </View>

      {/* Overview */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Overview</Text>
        <Text style={styles.overview}>{movie.overview}</Text>
      </View>
    </View>
      
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.surfaceAlt,
  },
  heroSection: {
    marginBottom: 60,
    height: 250,
  },
  backdrop: {
    width: '100%',
    height: '100%',
  },  
  
  titleSection: {
    position: 'absolute',
    bottom: -60,
    left: 2,
  },
  poster: {
    width: 100,
    height: 150,
    borderRadius: 8,
  },
  titleInfo: {
    marginLeft: 12, 
    flex: 1,
  },
  tagline: {
    fontStyle: 'italic',
    color: colors.textMuted,
  },
  title: {
    color: colors.textPrimary,
    fontSize: typography.title,
    fontWeight: '700',
  },
  statsBar: {
    marginTop: 12,
    marginBottom: 16,
    flexDirection: 'row',
    justifyContent: 'space-around', 
  },
  genresContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignSelf: 'center',
  },
  genreChip: {
    backgroundColor: colors.surfaceOpaque,
    borderRadius: 16,
    marginRight: 8,   
  },
  genreText: {
    color: colors.textWhite,
    paddingHorizontal: 12,
  },
  section: {
    padding: 16,
  },
  sectionTitle: {
    color: colors.textPrimary,
    fontSize: 18,
  },
  overview: {
    color: colors.textMuted,
    marginTop: 8,
    marginLeft: 4,
  },
});