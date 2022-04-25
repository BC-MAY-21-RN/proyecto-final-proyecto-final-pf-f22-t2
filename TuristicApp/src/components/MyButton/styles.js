import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    logo: {
      height: 24,
      width: 24,
      position: 'relative',
      top: '0.5%',
      right: '80%',
    },
    shadow:{
      shadowOffset: {
        width: 0,
        height: 5,
      },
      shadowOpacity: 0.9,
      shadowRadius: 8,
      shadowColor: "#0061FF",
      elevation: 10,
    }
})