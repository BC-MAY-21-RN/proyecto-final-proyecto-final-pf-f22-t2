import React, {useState} from 'react';
import { View, Pressable, Text } from 'react-native';
import { Drawer } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Avatar } from 'react-native-paper';
import { styles } from './styles';

const SideMenu = () => {
  const [active, setActive] = useState('');

  return (
    <View style={styles.sidemenu}>
      <SafeAreaView>
        <View style={styles.avatar}>
          <Avatar.Image size={88} source={require('../../assets/avatar.png')} />
          <Text>Johanna Guide</Text>
          <Text>johanna@guia.com</Text>
        </View>
        <Drawer.Section style={styles.listItems}>
          <View>
            <Drawer.Item
              icon={"home"}
              label="Home"
              active={active === 'one'}
              onPress={() => setActive('first')}
            />
            <Avatar.Icon size={50} icon="chevron-right" backgroundColor="transparent" color="black"  style={styles.homeIcon}/>
          </View>
          <View>
            <Drawer.Item
              icon={"map"}
              label="Place"
              active={active === 'two'}
              onPress={() => setActive('second')}
            />
            <Avatar.Icon size={50} icon="chevron-right" backgroundColor="transparent" color="black"  style={styles.homeIcon}/>
          </View>
          <View>
            <Drawer.Item
              icon={"calendar"}
              label="Events"
              active={active === 'three'}
              onPress={() => setActive('second')}
            />
            <Avatar.Icon size={50} icon="chevron-right" backgroundColor="transparent" color="black"  style={styles.homeIcon}/>
          </View>
          <View>
            <Drawer.Item
              icon={"food"}
              label="Food"
              active={active === 'four'}
              onPress={() => setActive('second')}
            />
            <Avatar.Icon size={50} icon="chevron-right" backgroundColor="transparent" color="black"  style={styles.homeIcon}/>
          </View>
          <View>
            <Drawer.Item
              icon={"heart"}
              label="Rate"
              active={active === 'five'}
              onPress={() => setActive('second')}
            />
            <Avatar.Icon size={50} icon="chevron-right" backgroundColor="transparent" color="black" style={styles.homeIcon}/>
          </View>
          <View style={styles.logoutMenu}>
            <Drawer.Item
              icon={"logout"}
              label="Logout"
              active={active === 'six'}
              onPress={() => setActive('second')}
            />
          </View>
        </Drawer.Section>
      </SafeAreaView>
    </View>
  );
};

export default SideMenu;