import { ScrollView, View, StyleSheet } from 'react-native';
import React from 'react';
import HeaderBar from '../../components/Header-bar/index';
import { Maps } from '../../components/Maps/index';
import CarouselCards from '../../components/Carousel/CarouselCards';
import MapView, {Marker,PROVIDER_GOOGLE} from 'react-native-maps';

export const HomeScreen = ({navigation, props}) => {
  return (
    <View>
      <HeaderBar title={"Home"} color={"white"}  style={{ backgroundColor: '#f75f6a' }} />

      <CarouselCards />
      <View style={styles.containerMap}>
         <MapView
            style={styles.map}
            provider={PROVIDER_GOOGLE}
            scrollEnabled={true}
            zoomEnabled={true}
            pitchEnabled={true}
            rotateEnabled={true}
            initialRegion={{
              latitude: 2.9273,
              longitude: -75.28189,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
            showsUserLocation={true}
      
          />
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row', 
    justifyContent: "flex-end",
    alignItems: "center",
    position:'absolute',
    bottom: 40,
  },
  containerButton: {
    width: "50%",
    padding:15,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
    height: 500,
  },
  containerMap: {
    marginTop: 5,
  },
});