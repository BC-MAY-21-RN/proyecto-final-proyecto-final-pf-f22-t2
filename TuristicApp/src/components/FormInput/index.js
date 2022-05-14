import { View, Text, TextInput } from 'react-native'
import React from 'react'
import { MyText } from '../MyText'

export const FormInput = ({
    labelText='',
    placeholderText = '',
    onChangeText = null,
    value = null,
    multiline = null,
    numberOfLines= null,
    ...more
}) => {
  return (
    <View style={{width: '100%', marginBottom: 20}}>
    <MyText bold>{labelText}</MyText>
    <TextInput
      style={{
        padding: 5,
        borderColor: 'gray',
        borderWidth: 1,
        width: '100%',
        borderRadius: 5,
        marginTop: 10,
      }}
      multiline={multiline}
      numberOfLines={numberOfLines}
      placeholder={placeholderText}
      onChangeText={onChangeText}
      value={value}
      {...more}
    />
  </View>
  )
}
