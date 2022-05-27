import { FlatList, Pressable, Text } from 'react-native'
import React from 'react'
import { Container } from './styled';
import { PlacesContent } from '../PlacesContent';

export const Places = ({ navigation, allPlaces, getAllPlaces, refreshing }) => {
  
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

