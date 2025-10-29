import { View, Text, StyleSheet, Image } from 'react-native';
import { theme } from '../../styles/theme.styles.js';

const { colors, typography } = theme;

export const StatItem = ({ icon, value, label }) => {
  return (
    <View style={styles.container}>
      <Image source={icon} style={styles.iconImage} />
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
  iconImage: {
    width: 16,
    height: 16,
    marginBottom: 4,
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