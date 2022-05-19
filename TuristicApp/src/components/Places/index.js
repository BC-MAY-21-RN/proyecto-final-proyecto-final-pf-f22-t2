import { FlatList, Pressable, ScrollView, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Container } from './styled';
import { PlacesContent } from '../PlacesContent';
import { getPlaces } from '../../services/addPlaces';

export const Places = ({ navigation }) => {
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


  const renderItem = ({ item }) => (
    <PlacesContent item={item} navigation={navigation}/>
  );
 
  return (
    <Container> 
      <Pressable onPress={() => {navigation.navigate('AddPlaces')}}>
        <Text>ADD Places</Text>
      </Pressable>
      <FlatList
        data={allPlaces}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        onRefresh={getAllPlaces}
        refreshing={refreshing}
      />
    </Container>
  )
}

