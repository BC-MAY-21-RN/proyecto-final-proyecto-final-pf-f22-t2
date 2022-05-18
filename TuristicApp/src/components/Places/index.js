import { FlatList } from 'react-native'
import React from 'react'
import { data } from "./data"
import { Container } from './styled';
import { PlacesContent } from '../PlacesContent';

export const Places = ({ navigation }) => {

  const renderItem = ({ item }) => (
    <PlacesContent item={item} navigation={navigation}/>
  );
 
  return (
    <Container> 
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </Container>
  )
}

