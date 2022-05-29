import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SignupScreen} from '../screens/SignupScreen/index';
import {HomeScreen} from '../screens/HomeScreen/index';
import {EventsScreen} from '../screens/EventsScreen/index';
import {PlacesScreen} from '../screens/PlacesScreen/index';
import AddPlaceScreen from '../screens/AddPlaceScreen';
import DetailsPlaceScreen from '../screens/DetailsPlacesScreen';
import { AuthProvider, infoUser } from '../library/utils/auth';
import { SearchScreen } from '../screens/SearchScreen';
import { FoodScreen } from '../screens/FoodScreen';
import  AddFoodScreen  from '../screens/AddFoodScreen';
import  AddEventScreen  from '../screens/AddEventScreen';
import AddUserScreen from '../screens/AddUserScreen';
import {PoleDirectionScreen} from '../screens/PoleDirectionScreen/index';

const Stack = createNativeStackNavigator();

export const Navigation = () => {

  const currentUser = infoUser()
  return (
    <AuthProvider>
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {!currentUser?
      <>
      <Stack.Screen name="PoleDirectionScreen" component={PoleDirectionScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
      <Stack.Screen name="AddUser" component={AddUserScreen} />
      </>:
      <>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Events" component={EventsScreen} />
      <Stack.Screen name="AddEvent" component={AddEventScreen} />
      <Stack.Screen name="Places" component={PlacesScreen} />
      <Stack.Screen name="AddPlace" component={AddPlaceScreen} />
      <Stack.Screen name="DetailsPlace" component={DetailsPlaceScreen} />
      <Stack.Screen name="Search" component={SearchScreen} />
      <Stack.Screen name="Food" component={FoodScreen} />
      <Stack.Screen name="AddFood" component={AddFoodScreen} />
      </>}
    </Stack.Navigator>
    </AuthProvider>
  );
};
