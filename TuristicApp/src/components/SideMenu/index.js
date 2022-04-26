import * as React from 'react';
import { Drawer } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Avatar } from 'react-native-paper';

const SideMenu = () => {
  const [active, setActive] = React.useState('');


  return (
    <SafeAreaView>
    <Avatar.Image size={54} source={require('../../assets/avatar.png')} />
    <Drawer.Section title="Johanna Guide">
      <Drawer.Item
        icon={"home"}
        label="Home"
        active={active === 'one'}
        onPress={() => setActive('first')}
      />
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
        icon={"apple"}
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
    </SafeAreaView>
  );
};

export default SideMenu;