import { ScrollView } from 'react-native';
import React from 'react';
import HeaderBar from '../../components/Header-bar/index';
import { Maps } from '../../components/Maps/index';
import CarouselCards from '../../components/Carousel/CarouselCards';


export const HomeScreen = ({navigation, props}) => {
  return (
    <ScrollView>
      <HeaderBar title={"Home"} color={"white"}  style={{ backgroundColor: '#f75f6a' }} />
      <CarouselCards />
      <Maps />
    </ScrollView>
  );
};
