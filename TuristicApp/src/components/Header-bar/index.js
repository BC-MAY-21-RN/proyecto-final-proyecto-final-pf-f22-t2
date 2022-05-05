import React, {useState} from 'react';
import {Text} from 'react-native';
import { Appbar } from 'react-native-paper';
import {styles} from '../Header-bar/styles';
import SideMenu from '../SideMenu';

const HeaderBar = ({title, color,style} ) => { 
  const [hamburguer, setHamburguer] = useState(false);

  return (
    <Appbar.Header style={style} >
      <Appbar.Action icon="menu" color={"white"} onPress={() => setHamburguer(!hamburguer)} />
      <Appbar.Action icon="magnify" color={"white"} onPress={() => console.log('')}  style={styles.magnifyIcon} />
      <Appbar.Content title={title} color={color} style={styles.homeText} />
      {hamburguer && <SideMenu/>}
    </Appbar.Header>
  )

  };

export default HeaderBar

