import { FlatList } from 'react-native';
import React from 'react';
import { data } from "./data";
import HeaderBar from '../../components/Header-bar';
import { Provider } from 'react-native-paper'
import { ModalEvents } from '../../components/ModalEvents';

export const EventsScreen = () => {

  const renderItem = ({ item }) => (
    <ModalEvents item={item}/>
  )

  return (
    <Provider>
      <HeaderBar title={"Events"} color={"white"}  style={{ backgroundColor: '#01bcd4' }} /> 
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={renderItem}
      />                                                                                             
    </Provider>
  )
}
