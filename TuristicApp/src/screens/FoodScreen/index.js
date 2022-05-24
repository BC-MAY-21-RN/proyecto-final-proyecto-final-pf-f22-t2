import { FlatList } from 'react-native';
import React from 'react';
import { data } from "./data";
import HeaderBar from '../../components/Header-bar';
import { Provider } from 'react-native-paper'
import { ModalFood } from '../../components/ModalFood';

export const FoodScreen = () => {

  const renderItem = ({ item }) => (
    <ModalFood item={item}/>
  )

  return (
    <Provider>
      <HeaderBar title={"Food"} color={"white"}  style={{ backgroundColor: '#ff825c' }} /> 
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={renderItem}
      />                                                                                             
    </Provider>
  )
}
