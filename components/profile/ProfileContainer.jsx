import { View, StyleSheet } from 'react-native';
import { ProfileInfo } from './ProfileInfo';
import { AvatarCard } from './AvatarCard';

export const ProfileContainer = ({ profile }) => {
  return (
    <View style={styles.container}>
      <AvatarCard profileData={profile} />
      <ProfileInfo profileData={profile} />
    </View>
  );
};

  

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});