import * as React from 'react';
import { Appbar } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import {styles} from '../Header-bar/styles';

const HeaderBar = ({title, color,style} ) => (
 
    <Appbar.Header style={style} >
      <Appbar.Action icon="menu" color={"white"} onPress={() => console.log('')} />
      <Appbar.Action icon="magnify" color={"white"} onPress={() => console.log('')}  style={styles.magnifyIcon} />
      <Appbar.Content title={title} color={color} style={styles.homeText} />
    </Appbar.Header>


 );

export default HeaderBar

