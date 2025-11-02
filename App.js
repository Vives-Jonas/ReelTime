import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from '@react-navigation/native';
import Ionicons  from '@expo/vector-icons/Ionicons';

import { HomeScreen, ProfileScreen,DetailsScreen } from './screens'

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Movies'
        component={HomeScreen}
        options={{ headerShown: false }} 
      />
      <Stack.Screen
        name='Details'
        component={DetailsScreen}
        options={{ title: "Movie Details" }}
      />
    </Stack.Navigator>
  );
}


export default function App() {
  return (
    <NavigationContainer>      
      <Tab.Navigator screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'home' : 'home-outline';
            } else if (route.name === 'My Profile') {
              iconName = focused ? 'person' : 'person-outline';
            }
                        
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}>
          <Tab.Screen name='Home' component={HomeStack} options={{ headerShown: false }} />
          <Tab.Screen name='My Profile' component={ProfileScreen} />
        </Tab.Navigator>
      </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
