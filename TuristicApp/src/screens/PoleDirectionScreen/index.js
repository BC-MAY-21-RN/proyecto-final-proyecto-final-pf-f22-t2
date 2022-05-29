import React, { useRef, useEffect } from 'react'
import { ImageBackground, StyleSheet, View, Image, Text, TouchableOpacity, Animated } from "react-native"
import { MyText } from '../../components/MyText'

import BackgroundImage from '../../assets/fondo_mano_del_gigante.jpg'
import ImagePole from '../../assets/pole_directions.png'

const FadeInView = (props) => {
  const fadeAnim = useRef(new Animated.Value(0)).current

  useEffect(() => {
    Animated.timing(
      fadeAnim,
      {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true
      }
    ).start();
  }, [fadeAnim])

  return (
    <Animated.View                 
      style={{
        ...props.style,
        opacity: fadeAnim,
      }}
    >
      {props.children}
    </Animated.View>
  )
}

export const PoleDirectionScreen = ({ navigation }) => {
  const isLoginScreen = {
    state: "true"
  }
  return (
    <View style={styles.container}>
      <ImageBackground source={BackgroundImage} resizeMode="cover" style={styles.image}>
        <View>
          <FadeInView>
            <Text style={styles.text}>TuristicApp</Text>
          </FadeInView>
        </View>
        <Image source={ImagePole} style={styles.imagePole} />
        <View>
          <TouchableOpacity onPress={() => navigation.navigate('Signup', isLoginScreen ? '' : { isLoginScreen: isLoginScreen })}>
            <MyText bold color={'#5e0202'} style={[styles.button, styles.textSignUp]}>{'Sign up'}</MyText>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate('Signup', isLoginScreen ? { isLoginScreen: isLoginScreen } : '')}>
            <MyText bold color={'#5e0202'} style={[styles.button, styles.textLogin]}>{'Login'}</MyText>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
  text: {
    color: '#fbed84',
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
    bottom: 230,
  },
  imagePole: {
    position: 'absolute',
    left: 30,
    right: 25,
    bottom: 40,
  },
  button: {
    color: '#5e0202',
    fontSize: 25,
    fontWeight: "bold",
  },
  textSignUp: {
    left: 80,
    top: 75,
  },
  textLogin: {
    left: 220,
    bottom: 30,
  },
})
