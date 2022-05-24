import React from 'react'
import { MyText } from '../MyText'
import { StyledInput, Container, ContainerText } from './styled'

export const MyInput = ({ 
    disabled, 
    text, 
    placeholder, 
    onChangeText, 
    value, 
    secureTextEntry, 
    error,
    keyboardType,
  }) => {
  return (
    <Container>
      <ContainerText>
        <MyText bold color={'#f75f6a'}>{text} </MyText>
        <MyText bold color={'red'} size={'14px'}> {error}</MyText>
      </ContainerText>
      <StyledInput enabled={disabled}
        placeholder={placeholder}
        onChangeText={onChangeText}
        value={value}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
      />
    </Container>
  )
}

