import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SignupScreen} from '../screens/SignupScreen/index';


const Stack = createNativeStackNavigator();

export const Navigation = () => {

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Signup" component={SignupScreen} />
    </Stack.Navigator>
  );
};
