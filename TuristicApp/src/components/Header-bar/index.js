import React, {useState,useContext,useEffect} from 'react';
import {View, Pressable} from 'react-native';
import { Appbar } from 'react-native-paper';
import {styles} from '../Header-bar/styles';
import SideMenu from '../SideMenu';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../../library/utils/auth'
import auth from '@react-native-firebase/auth';

const HeaderBar = ({title, color, style} ) => { 
  const [hamburguer, setHamburguer] = useState(false);
  const navigation = useNavigation();
  const [user, setUser] = useState(null)
  const {getUser} = useContext(AuthContext)

  const getInfoUser = async () => {
    try {
      const infoUser = await getUser(auth()._user.email);
      setUser(infoUser.docs[0].data())
    } catch (e) {
      setUser(null)
    }
  };

  useEffect(() => {
    getInfoUser()
  }, []);

  return (
    <View style={styles.headerB}>
      <Appbar.Header style={style} >
        <Appbar.Action icon="menu" color={"white"} onPress={() => setHamburguer(!hamburguer)} />
        <Appbar.Action icon="magnify" color={"white"} onPress={() => navigation.navigate('Search')}  style={styles.magnifyIcon} />
        <Appbar.Content title={title} color={color} style={styles.homeText} />
        {hamburguer && <SideMenu user={user}/>} 
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

