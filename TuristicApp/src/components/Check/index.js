import React from 'react';
import { View } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import { styles } from './styles';
import { MyText } from '../MyText';

export const Check = (props) => {
    const { value, onValueChange } =props;
  
    return (
        <View style={styles.containerCheck}>
            <CheckBox
            value={value}
            tintColors={{ true: '#f75f6a', false: '#b6b7ba' }}
            onValueChange={onValueChange}
            />
            <MyText bold>
                I agree to the 
                <MyText color={'#f75f6a'}>Terms of Services</MyText> and 
                <MyText color={'#f75f6a'}> Privacy Policy</MyText>
            </MyText>
        </View>
    )
}