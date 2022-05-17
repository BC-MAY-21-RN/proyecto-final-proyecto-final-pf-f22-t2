import { View } from 'react-native'
import React from 'react'
import { Places } from '../../components/Places';
import { HeaderBar } from '../../components/Header-bar/index';

export const PlacesScreen = ({navigation, props}) => {
  return (
    <View>
      <HeaderBar title={"Places"} color={"white"}  style={{ backgroundColor: '#cddd38' }} />
      <Places/>
    </View>
  );
};