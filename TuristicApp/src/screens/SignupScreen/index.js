import React, {useState, useContext} from 'react';
import { Button } from '../../components/MyButton';
import { Logo } from '../../components/Logo';
import { MyText } from '../../components/MyText';
import { MyInput } from '../../components/MyInput';
import { 
  ContainerCenter,
  ContainerLeft,
} from '../../library/utils/styledGlobal'
import { Check } from '../../components/Check';
import { Footer } from '../../components/Footer';
import { SafeAreaView } from 'react-native-safe-area-context';

import { AuthContext } from '../../library/utils/auth'

export const SignupScreen = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [terms, setTerms] = useState(false)
  const [isLoginScreen, setIsLoginScreen] = useState(false)
  const {signUp, signIn, errorEmail, errorPassword, setErrorEmail} = useContext(AuthContext)
  
  const regexEmail = /\S+@\S+\.\S+/
  const regexPassword = /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/

  const isValidEmail=(email)=>{
      return regexEmail.test(email) 
  }

  const isValidPassword=(password)=>{
      return regexPassword.test(password) 
  }
  
  const canSubmitLogin = isValidEmail(email)&&isValidPassword(password)
  const canSubmitSingUp = canSubmitLogin&&terms
 

  const handleSingUp = () =>{
    setErrorEmail(null)
    signUp(email, password);
  }

  const handleLogin = () => {
    setErrorEmail(null)
    if (email != '' && password != '') {
      setErrorEmail(null)
      signIn(email, password);
      
    }
  }

  return (
    <ContainerCenter>
      <SafeAreaView>
        <Logo color={'#f75f6a'} size={125}/>
      </SafeAreaView>
      <ContainerLeft>
        <MyText color={'#4e4d57'} size={'30px'} bold>{isLoginScreen?'Sign In':'Sign Up'}</MyText>
        {isLoginScreen&&<MyText bold>Welcome to Huila</MyText>}
        <MyInput text={'Email'} placeholder={'Your email address'}
          error={errorEmail}
          onChangeText={value => setEmail(value)}
          value={email} disabled={email?true:false}
        />
        <MyInput text={'Password'}
          error={errorPassword}
          onChangeText={value => setPassword(value)}
          value={password} disabled={password?true:false}
          secureTextEntry={true}
        />
        <MyText size={'14px'}>Use 8 or more characters with a mix of letters, numbers and symbols.</MyText>  
        {!isLoginScreen&&<Check value={terms}  onValueChange={value => setTerms(value)} />} 
      </ContainerLeft>
      <Button 
        onPress={isLoginScreen?handleLogin:handleSingUp} 
        text={isLoginScreen?'Sign In':'Sign Up'}
        disabled={isLoginScreen?!canSubmitLogin:!canSubmitSingUp}
      />
      <MyText bold size={'14px'}>Or</MyText>
      <Button icon text={isLoginScreen?'Sign In with Google':'Sign Up with Google'}/>
      <Footer isLoginScreen={isLoginScreen} onPress={() => setIsLoginScreen(!isLoginScreen)}/>
    </ContainerCenter>
  );
};
