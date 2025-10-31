import { View, Text, StyleSheet, Image } from 'react-native';
import { theme } from '../../styles/theme.styles.js';
import AntDesign from '@expo/vector-icons/AntDesign';

const { colors, typography } = theme;

export const StatItem = ({ icon, color='black', value, label }) => {
  return (
    <View style={styles.container}>
      <AntDesign name={icon} size={24} color={color} />
      <Text style={styles.value}>{value}</Text>
      {label && <Text style={styles.label}>{label}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginHorizontal: 12,
  },
  value: {
    fontSize: typography.medium,
    fontWeight: '600',
    color: colors.textPrimary,
  },
  label: {
    fontSize: typography.small,
    color: colors.textMuted,
    marginTop: 2,
  },
});