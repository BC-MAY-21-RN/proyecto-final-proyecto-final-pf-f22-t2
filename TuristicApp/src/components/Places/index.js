import { FlatList, Pressable, Text } from 'react-native'
import React from 'react'
import { Container } from './styled';
import { PlacesContent } from '../PlacesContent';

export const Places = ({ navigation, allPlaces, }) => {
  
  const renderItem = ({ item }) => (
    <PlacesContent item={item} navigation={navigation}/>
  );
 
  return (
    <Container> 
      <FlatList
        data={allPlaces}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </Container>
  )
}

