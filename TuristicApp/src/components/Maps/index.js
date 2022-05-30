import { View,StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import MapView from 'react-native-maps';

export const Maps = () => {
  return (
    <View style={styles.container}>
    {/*Render our MapView*/}
      <MapView
        style={styles.map}
        //specify our coordinates.
        initialRegion={{
          latitude: 2.9273,
          longitude: -75.28189,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    flex: 1, //the container will fill the whole screen.
    justifyContent: "flex-end",
    alignItems: "center",
    marginTop: 510,
    borderWidth: 2,
    borderColor: '#f75f6a'
  },
  map: {
    ...StyleSheet.absoluteFillObject,
    height: 500,
  },
});
