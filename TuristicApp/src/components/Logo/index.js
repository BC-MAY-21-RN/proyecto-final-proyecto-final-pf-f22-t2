import { Image } from 'react-native'
import React from 'react'
import { ContainerLogo } from './styled'

export const Logo = ( {color, size} ) => {
  return (
    <ContainerLogo color={color} size={size}>
      <Image
        style={{width: size, height: size,}}
        source={require('../../assets/logo-SignIn.png')}
      />
    </ContainerLogo>
  )
}

