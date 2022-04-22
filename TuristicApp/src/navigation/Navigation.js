import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {infoUser} from '../library/utils/auth';
import {SignupScreen} from '../screens/SignupScreen/index';
import {HomeScreen} from '../screens/HomeScreen/index';


const Stack = createNativeStackNavigator();

export const Navigation = () => {
  const currentUser = infoUser()
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {!currentUser?<Stack.Screen name="Signup" component={SignupScreen} />:
      <>
      <Stack.Screen name="Home" component={HomeScreen} />
      </>}
    </Stack.Navigator>
  );
};
