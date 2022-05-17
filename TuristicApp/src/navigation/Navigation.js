import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AuthProvider, infoUser} from '../library/utils/auth';
import {SignupScreen} from '../screens/SignupScreen/index';
import {HomeScreen} from '../screens/HomeScreen/index';
import {EventsScreen} from '../screens/EventsScreen/index';
import {PlacesScreen} from '../screens/PlacesScreen/index';
import AddPlacesScreen from '../screens/AddPlacesScreen';

const Stack = createNativeStackNavigator();

export const Navigation = () => {
  const currentUser = infoUser()
  return (
    <AuthProvider>
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {!currentUser?<Stack.Screen name="Signup" component={SignupScreen} />:
      <>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Events" component={EventsScreen} />
      <Stack.Screen name="Places" component={PlacesScreen} />
      <Stack.Screen name="AddPlaces" component={AddPlacesScreen} />

      </>}
    </Stack.Navigator>
    </AuthProvider>
  );
};
