import { StyleSheet, View, Text,  TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export const MovieItem = ({ movie }) => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('Details', { id: movie.id });
    };

  return (
    <View style={styles.container}>
      <Text>{movie.title}</Text>
      <Text>{movie.release_date}</Text>
      <TouchableOpacity onPress={handlePress}>
        <Text>View Details</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});