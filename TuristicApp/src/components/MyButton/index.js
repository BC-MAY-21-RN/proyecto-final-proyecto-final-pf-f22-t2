import { Image, View } from 'react-native'
import React from 'react'
import { Container } from './styled'
import { MyText  } from '../MyText'
import { styles } from './styles'

export const Button = ({ onPress, text, icon, disabled, color}) => {
  return (
    <Container 
      style={styles.shadow}  
      onPress={onPress}
      disabled={disabled}
      color={color}
    >
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
