import { View, Text,Image, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import { theme } from '../../styles/theme.styles.js';

const { colors, typography } = theme;

export const AvatarCard = ({ profileData }) => {
  const { name, role, avatar, contact } = profileData;
  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
          <Image
            source={avatar}
            style={styles.profileImage}
          />
          <Text style={styles.profileName}>{name}</Text>
          <Text style={styles.profileRole}>{role}</Text>
          <TouchableOpacity style={styles.emailButton}>
            <Text onPress={() => {
              Linking.openURL(`mailto:${contact.email}`)
            }} style={styles.emailButtonText}>Email me</Text>
          </TouchableOpacity>
          
        </View>
      </View>
  );
};

const styles = StyleSheet.create({
    container: {
    flexGrow: 1,
    backgroundColor: colors.background,
    paddingTop: 15,
  },
  profileContainer: {
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 10,
    borderWidth: 3,
    borderColor: colors.border,
  },
  profileName: {
    fontSize: typography.title,
    fontWeight: 'bold',
    marginBottom: 2,
  },
  profileRole: {
    fontSize: typography.medium,
    color: colors.textMuted,
    marginBottom: 12,
  },

  emailButton: {
    backgroundColor: colors.buttonPrimary,
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 25,
  },
  emailButtonText: {
    color: colors.buttonText,
    fontSize: typography.medium,
  },
});