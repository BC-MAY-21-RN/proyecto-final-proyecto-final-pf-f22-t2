import { View, Pressable, Text } from 'react-native'
import React from 'react'
{/*import { ImageCarousel } from '../../components/ImageCarousel/index';*/}
import HeaderBar from '../../components/Header-bar/index';
import { signOut } from '../../library/utils/auth';



export const HomeScreen = ({navigation, props}) => {
  return (
    <View>
      <HeaderBar title={"Home"} color={"white"}  style={{ backgroundColor: '#607d8b' }} />
      {/*<ImageCarousel />*/}

      <Pressable onPress={signOut}>
        <Text>Salir de sesión</Text>
      </Pressable>
    </View>

  );
};
