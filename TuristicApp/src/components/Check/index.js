import React from 'react';
import { View, Text } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import { styles } from './styles';

export const Check = (props) => {
    const { value, onValueChange, text } =props;
  
    return (
        <View style={styles.containerCheck}>
            <CheckBox
            
            value={value}
            tintColors={{ true: '#5b6ef7', false: '#b6b7ba' }}
            onValueChange={onValueChange}
            />
            <Text>{text}</Text>
        </View>
    )
}