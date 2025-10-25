import {
  View,
  Text,
  StyleSheet,
  Linking,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';

export const ProfileInfo = ({ profileData }) => {
  const { bio, contact, socials, location } = profileData;

  const icons = {
    github: <AntDesign name='github' size={24} color='black' />,
    linkedin: <AntDesign name='linkedin' size={24} color='black' />,
    twitter: <AntDesign name='twitter' size={24} color='black' />,
    email: <AntDesign name='mail' size={24} color='black' />,
    phone: <AntDesign name='phone' size={24} color='black' />,
    website: <AntDesign name='link' size={24} color='black' />,
  };

  const handleContactPress = (method, value) => {
    if (method === 'email') Linking.openURL(`mailto:${value}`);
    else if (method === 'phone') Linking.openURL(`tel:${value}`);
    else if (method === 'website') Linking.openURL(value);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Bio</Text>
        <Text style={styles.sectionText}>{bio}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Socials</Text>
        <View style={styles.linkRow}>
          {Object.entries(socials).map(([platform, url]) => (
            <TouchableOpacity
              key={platform}
              style={styles.linkButton}
              onPress={() => Linking.openURL(url)}
            >
              {icons[platform] || (
                <Text style={styles.linkText}>{platform}</Text>
              )}
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Contact</Text>
         <View style={styles.linkRow}>
          {Object.entries(contact).map(([method, value]) => (
            <TouchableOpacity
              key={method}
              style={styles.linkButton}
              onPress={() => {handleContactPress(method, value)}}
            >
              {icons[method] || (
                <Text style={styles.linkText}>{method}</Text>
              )}
            </TouchableOpacity>
          ))}
        </View>
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
    backgroundColor: '#fff',
  },

  section: {
    marginBottom: 18,
    backgroundColor: '#F8F8F8',
    borderRadius: 10,
    padding: 15,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#333',
  },
  sectionText: {
    fontSize: 15,
    color: '#444',
    lineHeight: 22,
    marginLeft: 4,
  },
  link: {
    color: '#007AFF',
    textDecorationLine: 'underline',
  },
  contactRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  linkRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  },
  linkButton: {
    padding: 10,    
    borderRadius: 28,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
  },
  linkText: {
    color: '#007AFF',
    fontWeight: '500',
  },
});
