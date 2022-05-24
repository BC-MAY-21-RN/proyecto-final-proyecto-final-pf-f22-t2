import React, {useState} from 'react';
import {View, Pressable} from 'react-native';
import { Appbar } from 'react-native-paper';
import {styles} from '../Header-bar/styles';
import SideMenu from '../SideMenu';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const HeaderBar = ({title, color, style} ) => { 
  const [hamburguer, setHamburguer] = useState(false);
  const navigation = useNavigation();

  return (
    <View style={styles.headerB}>
      <Appbar.Header style={style} >
        <Appbar.Action icon="menu" color={"white"} onPress={() => setHamburguer(!hamburguer)} />
        <Appbar.Action icon="magnify" color={"white"} onPress={() => navigation.navigate('Search')}  style={styles.magnifyIcon} />
        <Appbar.Content title={title} color={color} style={styles.homeText} />
        {hamburguer && <SideMenu/>} 
        {hamburguer && (
          <View style={styles.closeIcon}>
            <Pressable onPress={() => setHamburguer(!hamburguer)}>
              <Icon name="close" size={20} color="#f75f6a" />
            </Pressable>
          </View>
        )}
      </Appbar.Header>
    </View>
  )

  };

export default HeaderBar

