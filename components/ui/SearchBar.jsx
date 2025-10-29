import { View, Text, Switch,TextInput, StyleSheet } from 'react-native';
import { theme } from '../../styles/theme.styles';

const { colors, typography } = theme;

export const SearchBar = ({ searchValue, onChangeText, filterValue, onValueChange }) => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder='Search...'
        style={styles.input}
        value={searchValue}
        onChangeText={onChangeText}
      />
      <View style={styles.switchContainer}>
        <Text style={styles.switchLabel}>High Rated</Text>
        <Switch
          value={filterValue}
          onValueChange={onValueChange}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 8,
    paddingHorizontal: 12,
    gap: 12,
  },
  
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: colors.accent,
    borderRadius: 8,
    paddingVertical: 6,
    paddingHorizontal: 12,
    fontSize: typography.medium,
    fontFamily: 'Georgia',
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  switchLabel: {
    fontSize: typography.medium,
    color: colors.secondary,
    fontFamily: 'Georgia',
  },
});