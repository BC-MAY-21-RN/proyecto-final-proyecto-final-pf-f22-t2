import { Image, View } from 'react-native'
import React from 'react'
import { Container } from './styled'
import { MyText  } from '../MyText'
import { styles } from './styles'

export const Button = ({text,icon}) => {
  return (
    <Container style={styles.shadow}>
      {icon&&<Image 
        style={styles.logo} 
          source={{
          uri: 'https://cdn-icons-png.flaticon.com/512/2875/2875404.png',
        }}
      />}
      <MyText color={'white'} bold>{text}</MyText>
    </Container>
  )
}
