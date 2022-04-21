import { Image } from 'react-native'
import React from 'react'
import { ContainerLogo } from './styled'

export const Logo = ( {color} ) => {
  return (
    <ContainerLogo color={color}>
      <Image
        style={{width: 130, height: 130,}}
        source={require('../../assets/logo-SignIn.png')}
      />
    </ContainerLogo>
  )
}

