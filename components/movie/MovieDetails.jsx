import { View, Text, StyleSheet } from 'react-native';

export const MovieDetails = ({ movie }) => {
  return (
   <View style={styles.container}>
         <Text>{movie.title}</Text>
         <Text>{movie.release_date}</Text>         
       </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});