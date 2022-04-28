import { View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5';
import { signOut } from '../../library/utils/auth';
import { ImageCarousel } from '../../components/ImageCarousel';
import { MyText } from '../../components/MyText';
import { Places } from '../../components/Places';
import HeaderBar from '../../components/Header-bar/index';


export const HomeScreen = ({navigation, props}) => {
  return (
    
    <View>
      <MyText color={'#607d8b'} size={'30px'} bold>{'HOME'}</MyText>
      <Icon name="power-off" 
        size={25}
        color={'#4e4d57'}
        onPress={signOut} />
      <ImageCarousel />
      
      <HeaderBar title={"Home"} color={"white"}  style={{ backgroundColor: '#607d8b' }} />
      <Places/>
    </View>
  );
};
