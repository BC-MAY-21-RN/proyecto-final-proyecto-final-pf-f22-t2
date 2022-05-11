import { View } from 'react-native'
import React from 'react'
{/*import { ImageCarousel } from '../../components/ImageCarousel/index';*/}
import HeaderBar from '../../components/Header-bar/index';
import { Maps } from '../../components/Maps/index';

export const HomeScreen = ({navigation, props}) => {
  return (
    <View>
      <HeaderBar title={"Home"} color={"white"}  style={{ backgroundColor: '#607d8b' }} />
      {/*<ImageCarousel />*/}
      <Maps />
    </View>
  );
};
