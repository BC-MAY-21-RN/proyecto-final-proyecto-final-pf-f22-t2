import React from 'react'
import { TouchableOpacity } from 'react-native';
import { ContainerFooter } from '../../library/utils/styledGlobal'
import { MyText } from '../MyText'

export const Footer = ({isLoginScreen,onPress}) => {
  return (
    <ContainerFooter>
      {!isLoginScreen&&<MyText bold>Have an Account? </MyText>}
      <TouchableOpacity  onPress={onPress}>
        <MyText bold color={'#f75f6a'}>{isLoginScreen?'Sign Up': 'Sign In'}</MyText>
      </TouchableOpacity>
    </ContainerFooter>
  )
}

