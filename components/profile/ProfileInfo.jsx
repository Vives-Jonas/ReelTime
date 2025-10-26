import { View, Text, StyleSheet, ScrollView, } from 'react-native';
import { ProfileLink } from './ProfileLink';
import { theme } from '../../styles/theme.styles.js';

const { colors, typography } = theme;

export const ProfileInfo = ({ profileData }) => {

  const { bio, contact, socials, location } = profileData;  

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Bio</Text>
        <Text style={styles.sectionText}>{bio}</Text>
      </View>

      <View style={styles.section}>
        <ProfileLink title="Socials" content={socials} />
      </View>

      <View style={styles.section}>
        <ProfileLink title="Contact" content={contact} />
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Location</Text>
        <Text style={styles.sectionText}>{location}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: colors.background,
  },

  section: {
    marginBottom: 18,
    backgroundColor: colors.surface,
    borderRadius: 10,
    padding: 15,
  },
  sectionTitle: {
    fontSize: typography.medium,
    fontWeight: 'bold',
    marginBottom: 12,
    color: colors.textPrimary,
  },
  sectionText: {
    fontSize: typography.small,
    color: colors.textSecondary,
    lineHeight: 22,
    marginLeft: 4,
  },  
  
});
