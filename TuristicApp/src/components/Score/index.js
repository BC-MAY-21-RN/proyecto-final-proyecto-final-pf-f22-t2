import { TouchableOpacity } from 'react-native'
import React from 'react'
import { Container } from './styled'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { MyText } from '../MyText';
import { updateRating } from '../../services/servicesPlace'

export const Score = ({ item }) => {
  // const likes = item.place.rating
  // const dislikes = (item.place.ratingTotal - item.place.rating)

  return (
    <Container>
      <TouchableOpacity>
        <Icon name="cards-heart" size={30} color="#f75f6a" onPress={() => updateRating(item)}/>
      </TouchableOpacity>
      <MyText bold color={'black'}>0</MyText>
      <TouchableOpacity>
        <Icon name="heart-broken" size={30} color="#2dc653"/>
      </TouchableOpacity>
      <MyText bold color={'black'}>00</MyText>
    </Container>
  )
}
