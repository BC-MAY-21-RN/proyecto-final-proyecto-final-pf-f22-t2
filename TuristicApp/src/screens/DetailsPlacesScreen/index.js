import { Image, FlatList, View } from 'react-native'
import React from 'react'
import { MyText } from '../../components/MyText';

const DetailsPlaceScreen = ({ route }) => {
  const { item } = route.params;
  
  return (
    <View>
      <MyText bold size={'24px'}>{item.name}</MyText>
      <Image style={{height: 100, width:100}} source={item.img} />
    </View>
  )
}

export default DetailsPlaceScreen