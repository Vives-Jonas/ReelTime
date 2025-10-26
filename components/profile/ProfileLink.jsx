import { View, Text, StyleSheet,Linking, TouchableOpacity, } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import { theme } from '../../styles/theme.styles.js';

const { colors, typography } = theme;

export const ProfileLink = ({ title, content }) => {

    const icons = {
        github: <AntDesign name='github' size={24} color='black' />,
        gitlab: <AntDesign name="gitlab" size={24} color="black" />,
        linkedin: <AntDesign name='linkedin' size={24} color='black' />,
        twitter: <AntDesign name='twitter' size={24} color='black' />,
        email: <AntDesign name='mail' size={24} color='black' />,
        phone: <AntDesign name='phone' size={24} color='black' />,
        website: <AntDesign name='link' size={24} color='black' />,
      };

      const handleLinkPress = (method, value) => {
          if (method === 'email') Linking.openURL(`mailto:${value}`);
          else if (method === 'phone') Linking.openURL(`tel:${value}`);
          else Linking.openURL(value);
        };

  return (
    <>
        <Text style={styles.sectionTitle}>{title}</Text>
        <View style={styles.linkRow}>
            {Object.entries(content).map(([name, target]) => (
            <TouchableOpacity
                key={name}
                style={styles.linkButton}
                onPress={() => {handleLinkPress(name, target)}}
            >
                {icons[name] || (
                <Text style={styles.linkText}>{name}</Text>
                )}
            </TouchableOpacity>
            ))}
        </View>
    </>
  );
};

const styles = StyleSheet.create({
  
  sectionTitle: {
    fontSize: typography.medium,
    fontWeight: 'bold',
    marginBottom: 12,
    color: colors.textPrimary,
  }, 
  linkRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  },
  linkButton: {
    padding: 10,    
    borderRadius: 28,
    backgroundColor: colors.surface,
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
  },
  linkText: {
    color: colors.link,
    fontWeight: '500',
  },
});