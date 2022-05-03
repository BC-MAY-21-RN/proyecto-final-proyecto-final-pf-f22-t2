import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {infoUser} from '../library/utils/auth';
import {SignupScreen} from '../screens/SignupScreen/index';
import {HomeScreen} from '../screens/HomeScreen/index';
import {EventsScreen} from '../screens/EventsScreen/index';
import {PlacesScreen} from '../screens/PlacesScreen/index';

const Stack = createNativeStackNavigator();

export const Navigation = () => {
  const currentUser = infoUser()
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {!currentUser?<Stack.Screen name="Signup" component={SignupScreen} />:
      <>
      <Stack.Screen name="Events" component={EventsScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Places" component={PlacesScreen} />
      </>}
    </Stack.Navigator>
  );
};
