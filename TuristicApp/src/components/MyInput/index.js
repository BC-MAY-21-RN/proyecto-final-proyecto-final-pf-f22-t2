import React from 'react'
import { MyText } from '../MyText'
import { StyledInput, Container } from './styled'

export const MyInput = ({ disabled, text, placeholder, onChangeText, value }) => {
  return (
    <Container>
      <MyText bold color={'#f75f6a'}>{text}</MyText>
      <StyledInput enabled={disabled}
        placeholder={placeholder}
        onChangeText={onChangeText}
        value={value}
      />
    </Container>
  )
}

