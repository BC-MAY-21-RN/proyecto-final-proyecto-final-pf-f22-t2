import { View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Places } from '../../components/Places';
import HeaderBar from '../../components/Header-bar/index';
import { getPlaces } from '../../services/addPlaces';

export const PlacesScreen = ({navigation, props}) => {
  const [allPlaces, setAllPlaces] = useState([])
  const [refreshing, setRefreshing] = useState(false)

  const getAllPlaces = async () => {
    setRefreshing(true);
    
    const places = await getPlaces();
 
    let tempPlaces = [];
    await places.docs.forEach(async places => {
      await tempPlaces.push({id: places.id, ...places.data()});
    });
    await setAllPlaces([...tempPlaces]);

    setRefreshing(false);
  };

  useEffect(() => {
    getAllPlaces();
  }, []);

  return (
    <View style={{flex:1}}>
      <HeaderBar 
        title={"Places"} 
        color={"white"}  
        style={{ backgroundColor: '#cddd38' }} 
        allPlaces={allPlaces}
        navigation={navigation}
      />
      <Places navigation={navigation}/>
    </View>
  );
};