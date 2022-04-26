import React from 'react';
import { View, Image } from 'react-native';
import { Drawer } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Avatar } from 'react-native-paper';
import { styles } from './styles';

const SideMenu = () => {
  const [active, setActive] = React.useState('');


  return (
    <View style={styles.sidemenu}>
      <SafeAreaView>
        <View>
          <Avatar.Image size={54} source={require('../../assets/avatar.png')} />
            <Drawer.Section title="Johanna Guide">
              <View>
              <Drawer.Item
                icon={"home"}
                label="Home"
                active={active === 'one'}
                onPress={() => setActive('first')}
              />
              <Avatar.Icon size={40} icon="chevron-right" backgroundColor="transparent" color="black" />
              </View>
              <Drawer.Item
                icon={"map"}
                label="Place"
                active={active === 'two'}
                onPress={() => setActive('second')}
              />
              <Drawer.Item
                icon={"calendar"}
                label="Events"
                active={active === 'three'}
                onPress={() => setActive('second')}
              />
              <Drawer.Item
                icon={"food"}
                label="Food"
                active={active === 'four'}
                onPress={() => setActive('second')}
              />
              <Drawer.Item
                icon={"heart"}
                label="Rate"
                active={active === 'five'}
                onPress={() => setActive('second')}
              />
              <Drawer.Item
                icon={"logout"}
                label="Logout"
                active={active === 'six'}
                onPress={() => setActive('second')}
              />
            </Drawer.Section>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default SideMenu;