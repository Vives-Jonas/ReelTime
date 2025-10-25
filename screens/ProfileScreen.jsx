import {  StyleSheet } from 'react-native';
import { ProfileContainer } from '../components/profile/ProfileContainer';
import profile from '../data/profile';

export const ProfileScreen = ({}) => {
  return (
   
      <ProfileContainer profile={profile} />
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
