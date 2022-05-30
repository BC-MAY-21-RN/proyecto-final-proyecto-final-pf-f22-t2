import { View } from 'react-native';
import React from 'react';
import Search from '../../components/Search'

export const SearchScreen = ({navigation, route}) => {
  const {allPlaces} = route.params
  return (
    <View>
      <Search allPlaces={allPlaces} navigation={navigation}/>
    </View>
  );
};
