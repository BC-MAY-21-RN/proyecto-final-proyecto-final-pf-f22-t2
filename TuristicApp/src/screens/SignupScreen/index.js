import React from 'react';
import {View, Text, TextInput} from 'react-native';
import {ButtonPrimary} from '../../components/ButtonPrimary/';
import { ButtonSecond } from '../../components/ButtonSecond';
import { SafeAreaView } from 'react-native';

export const SignupScreen = () => {
  return (
    <SafeAreaView>
      <View>
        <Text>Sign In</Text>
        <TextInput label={'Email'} placeholder={'example@email.com'}/>
        <TextInput placeholder={'Password'}/>
        <ButtonPrimary text={'Sign In'}/>
        <ButtonSecond text={'Sign In with Google'}/>
      </View>
    </SafeAreaView>
  );
};
