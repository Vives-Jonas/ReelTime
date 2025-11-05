import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ProfileScreen} from '../screens'
import { HomeStack } from './HomeStack';
import Ionicons from '@expo/vector-icons/Ionicons';

const Tab = createBottomTabNavigator();


export const AppTabs = () => {
    return (
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
    );
};