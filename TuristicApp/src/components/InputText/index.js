import { TextInput,Text } from 'react-native'
import React from 'react'


export const InputText = ({ value, placeholder,  style, onChangeText, label, secureTextEntry, isRequiered } ) => {

  return (
  <>
    <Text>
      {label}{ isRequiered&&"*"}
    </Text>
    <TextInput
        placeholder={placeholder}
        placeholderTextColor='grey'
        style={style}
        onChangeText={onChangeText}
        value={value}
        secureTextEntry={secureTextEntry}
        />
    </>
  );
};
