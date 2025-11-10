import { View, Text, Switch, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { theme } from '../../styles/theme.styles';

const { colors, typography } = theme;

export const SearchBar = ({ searchValue, onChangeText, filterValue, onValueChange, sortValue, onSortChange }) => {
  return (
    <View>
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
      <View style={styles.sortContainer}>
        <Text style={styles.sortLabel}>Sort:</Text>
        <TouchableOpacity 
          style={[styles.sortButton, sortValue === 'default' && styles.sortButtonActive]}
          onPress={() => onSortChange('default')}
        >
          <Text style={[styles.sortButtonText, sortValue === 'default' && styles.sortButtonTextActive]}>
            Default
          </Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.sortButton, sortValue === 'rating' && styles.sortButtonActive]}
          onPress={() => onSortChange('rating')}
        >
          <Text style={[styles.sortButtonText, sortValue === 'rating' && styles.sortButtonTextActive]}>
            Rating
          </Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.sortButton, sortValue === 'title' && styles.sortButtonActive]}
          onPress={() => onSortChange('title')}
        >
          <Text style={[styles.sortButtonText, sortValue === 'title' && styles.sortButtonTextActive]}>
            Title
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
    color: colors.primary,
    fontFamily: 'Georgia',
  },
  sortContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 8,
    gap: 8,
  },
  sortLabel: {
    fontSize: typography.medium,
    color: colors.primary,
    fontFamily: 'Georgia',
    marginRight: 4,
  },
  sortButton: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: colors.accent,
    backgroundColor: 'transparent',
  },
  sortButtonActive: {
    backgroundColor: colors.accent,
  },
  sortButtonText: {
    fontSize: typography.small,
    color: colors.accent,
    fontFamily: 'Georgia',
  },
  sortButtonTextActive: {
    color: colors.primary,
    fontWeight: 'bold',
  },
});