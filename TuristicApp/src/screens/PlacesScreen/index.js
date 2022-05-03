import { View } from 'react-native'
import React from 'react'
import { Places } from '../../components/Places';
import HeaderBar from '../../components/Header-bar/index';

export const PlacesScreen = ({navigation, props}) => {
  return (
    <View>
      <HeaderBar title={"Home"} color={"white"}  style={{ backgroundColor: '#607d8b' }} />
      <Places/>
    </View>
  );
};