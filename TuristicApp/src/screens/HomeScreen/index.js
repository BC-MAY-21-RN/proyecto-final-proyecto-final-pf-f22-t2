import { View, Text } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5';
import { signOut } from '../../library/utils/auth';
import { ImageCarousel } from '../../components/ImageCarousel';
import { MyText } from '../../components/MyText';

export const HomeScreen = ({navigation, props}) => {
  return (
    <View>
      <MyText color={'#607d8b'} size={'30px'} bold>{'HOME'}</MyText>
      <Icon name="power-off" 
            size={25}
            color={'#4e4d57'}
        onPress={signOut} />
      <ImageCarousel />
    </View>
  );
};
