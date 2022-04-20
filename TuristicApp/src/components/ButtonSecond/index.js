import React from 'react';
import { TouchableOpacity, Text, Image } from 'react-native';
import { styles } from './styles';

export const ButtonSecond = (props) => {
    const { onPress, text, } =props;
    return (
        <TouchableOpacity onPress = { onPress }
            style={styles.containerTouch}>
            <Image 
                style={styles.logo} 
                source={{
                    uri: 'https://cdn-icons-png.flaticon.com/512/2875/2875404.png',
                }}/>
            <Text style={styles.text}>
                {text}
            </Text>
        </TouchableOpacity>
    )
}