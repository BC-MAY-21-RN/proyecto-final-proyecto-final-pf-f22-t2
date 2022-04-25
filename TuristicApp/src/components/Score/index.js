import { TouchableOpacity } from 'react-native'
import React from 'react'
import { Container } from './styled'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { MyText } from '../MyText';

export const Score = ({likes, dislikes}) => {
  return (
    <Container>
      <TouchableOpacity>
        <Icon name="cards-heart" size={30} color="#f75f6a"/>
      </TouchableOpacity>
      <MyText bold color={'black'}>{likes}</MyText>
      <TouchableOpacity>
        <Icon name="heart-broken" size={30} color="#2dc653"/>
      </TouchableOpacity>
      <MyText bold color={'black'}>{dislikes}</MyText>
    </Container>
  )
}
