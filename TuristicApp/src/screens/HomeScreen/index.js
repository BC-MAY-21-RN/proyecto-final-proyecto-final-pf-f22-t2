import { View } from 'react-native';
import React from 'react';
import { ImageCarousel } from '../../components/ImageCarousel';
import { Places } from '../../components/Places';
import {HeaderBar} from '../../components/Header-bar';


export const HomeScreen = ({navigation}) => {
return (
    <View>
      <HeaderBar title={"Places"} color={"white"} style={{ backgroundColor: '#607d8b' }} />
      {/* <ImageCarousel/> */}
      <Places/>
    </View>
  );
};
