import { View, Text } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5';
import { signOut } from '../../library/utils/auth';

export const HomeScreen = ({navigation, props}) => {
  return (
    <View>
      <Text>HomeScreen</Text>
      <Icon name="power-off" 
            size={25}
            color={'#4e4d57'}
            onPress={signOut}/>
    </View>
  );
};
