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
      <Pressable onPress={() => {navigation.navigate('AddPlace')}}>
        <Text>ADD Places</Text>
      </Pressable>
      <Pressable onPress={() => {navigation.navigate('AddFood')}}>
        <Text>ADD Food</Text>
      </Pressable>
      <Pressable onPress={() => {navigation.navigate('AddEvent')}}>
        <Text>ADD Event</Text>
      </Pressable>
      <FlatList
        data={allPlaces}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </Container>
  )
}

