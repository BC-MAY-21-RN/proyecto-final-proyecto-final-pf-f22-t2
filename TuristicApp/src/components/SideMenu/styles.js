import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  avatar: {
    alignItems: "center",
    backgroundColor: 'white',
    paddingTop: 55,
    paddingBottom: 30,
  },
  homeIcon: {
    position: "absolute",
    right: 15,
  },
  listItems: {
    // backgroundColor: "#f75f6a",
    backgroundColor: 'white',
    paddingTop: 45,
  },
  logoutMenu: {
    paddingTop: 50,
    paddingBottom: 50,
    height: '100%',
  },
  sidemenu: {
    position: "absolute",
    borderColor: '#f75f6a',
    borderStyle: 'solid',
    width: '50%',
    top: 0,
    bottom: 0,
    zIndex: 2,
  },
})