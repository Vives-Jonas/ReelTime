import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { AppTabs } from './navigation/AppTabs';



export default function App() {
  return (
    <NavigationContainer>
      <AppTabs />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
