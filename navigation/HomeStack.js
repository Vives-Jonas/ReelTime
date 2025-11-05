import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen, DetailsScreen } from '../screens';

const Stack = createNativeStackNavigator();

export const HomeStack = () => {
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
};