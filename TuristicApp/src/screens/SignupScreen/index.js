import React, {useState} from 'react';
import { TouchableOpacity } from 'react-native';
import { Button } from '../../components/MyButton';
import { Logo } from '../../components/Logo';
import { MyText } from '../../components/MyText';
import { MyInput } from '../../components/MyInput';

import { 
  ContainerCenter,
  ContainerLeft,
  ContainerFooter
} from '../../library/utils/styledGlobal'
import { Check } from '../../components/Check';
import { Footer } from '../../components/Footer';


export const SignupScreen = () => {
  const [email, setEmail] = useState('')
  const [passwrod, setPassword] = useState('')
  const [terms, setTerms] = useState(false)
  const [isLoginScreen, setIsLoginScreen] = useState(false)

  return (
    <ContainerCenter>
      <Logo color={'#f75f6a'}/>
      <ContainerLeft>
        <MyText color={'#4e4d57'} size={'30px'} bold>{isLoginScreen?'Sign In':'Sign Up'}</MyText>
        {isLoginScreen&&<MyText bold>Welcome to Huila</MyText>}
        <MyInput text={'Email'} placeholder={'Your email address'}
          onChangeText={value => setEmail(value)}
          value={email} disabled={email?true:false}
        />
        <MyInput text={'Password'}
          onChangeText={value => setPassword(value)}
          value={passwrod} disabled={passwrod?true:false}
        />
        {!isLoginScreen&&<Check value={terms}  onValueChange={value => setTerms(value)} />} 
      </ContainerLeft>
      <Button text={'Sign In'}/>
      <MyText bold size={'14px'}>Or</MyText>
      <Button icon text={'Sign In with Google'}/>
      <Footer isLoginScreen={isLoginScreen} onPress={() => setIsLoginScreen(!isLoginScreen)}/>
    </ContainerCenter>
  );
};
