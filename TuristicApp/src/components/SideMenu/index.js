
import React, {useState, useContext} from 'react';
import { View, Pressable, Text, TouchableOpacity } from 'react-native';
import { Drawer } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Avatar } from 'react-native-paper';
import { styles } from './styles';
import { AuthContext } from '../../library/utils/auth'
import { useNavigation } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import { MyText } from '../MyText';

const SideMenu = ({user}) => {
  const [active, setActive] = useState('');
  const navigation = useNavigation(); 
  const {signOut} = useContext(AuthContext);

  return (
    <View style={styles.sidemenu}>
      <SafeAreaView>
        {user?
        <TouchableOpacity style={styles.avatar} onPress={() => {navigation.navigate('Profile',{user})}}>
          <Avatar.Image size={132} source={{uri:user.dataUser.photo[0]}} 
          />
          <Text>{user.dataUser.firstName}</Text>
          <Text>{user.dataUser.email}</Text>
        </TouchableOpacity>
        :
        <View style={styles.avatar}>
          <Avatar.Image size={132} source={require('../../assets/logo-SignIn.png')} 
          />
          <Text>{auth()._user.displayName}</Text>
          <Text>{auth()._user.email}</Text>
          <TouchableOpacity onPress={() => {navigation.navigate('Home')}}>
            <MyText bold color={'#f75f6a'}>Complete profile</MyText>
          </TouchableOpacity>
        </View>}
        <Drawer.Section style={styles.listItems}>
          <View>
            <Drawer.Item 
              icon= {"home"} 
              label="Home"
              active={active === 'one'}
              onPress={() => navigation.navigate('Home')}
            />
            <Avatar.Icon size={50} icon="chevron-right" backgroundColor="transparent" color="#f75f6a"  style={styles.homeIcon}/>
          </View>
          <View>
            <Drawer.Item
              icon={"map"}
              label="Place"
              active={active === 'two'}
              onPress={() => navigation.navigate('Places')}
            />
            <Avatar.Icon size={50} icon="chevron-right" backgroundColor="transparent" color="#f75f6a"  style={styles.homeIcon}/>
          </View>
          <View>
            <Drawer.Item
              icon={"calendar"}
              label="Events"
              active={active === 'three'}
              onPress={() => navigation.navigate('Events')}
            />
            <Avatar.Icon size={50} icon="chevron-right" backgroundColor="transparent" color="#f75f6a"  style={styles.homeIcon}/>
          </View>
          <View>
            <Drawer.Item
              icon={"food"}
              label="Food"
              active={active === 'four'}
              onPress={() => navigation.navigate('Food')}
            />
            <Avatar.Icon size={50} icon="chevron-right" backgroundColor="transparent" color="#f75f6a"  style={styles.homeIcon}/>
          </View>
          {/* <View>
            <Drawer.Item
              icon={"heart"}
              label="Rate"
              active={active === 'five'}
              onPress={() => setActive('second')}
            />
            <Avatar.Icon size={50} icon="chevron-right" backgroundColor="transparent" color="#f75f6a" style={styles.homeIcon}/>
          </View> */}
          <View style={styles.logoutMenu}>
            <Drawer.Item
              icon={"logout"}
              label="Logout"
              active={active === 'six'}
              onPress={signOut}
            />
          </View>
        </Drawer.Section>
      </SafeAreaView>
    </View>
  );
};

export default SideMenu;