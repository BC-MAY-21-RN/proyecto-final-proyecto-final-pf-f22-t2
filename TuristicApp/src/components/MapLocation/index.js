import React, {useState} from 'react';
import { ToastAndroid, StyleSheet, View } from 'react-native';
import { MyText } from '../../components/MyText';
import { Modal, Portal } from 'react-native-paper';
import MapView from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation'

export function MapLocation({ visible, setVisible, setLocation }) {

    const containerStyle = {backgroundColor: 'white', margin: 20};
    const hideModal = () => setVisible(false);
    const [latitude, setLatitude] = useState(2.9273);
    const [longitude, setLongitude] = useState(-75.28189);
    const [latitudeDelta, setLatitudeDelta] = useState(0.0922);
    const [longitudeDelta, setLongitudeDelta] = useState(0.0421);

    const calcDelta = (lat, lon, accuracy) => {
     
      const oneDegreeOfLongitudedInMeters = 111.32
      const circumference = (40075 / 360)
      const latDelta = accuracy * (1 / (Math.cos(lat) * circumference))
      const lonDelta = (accuracy / oneDegreeOfLongitudedInMeters)

      setLatitude(lat)
      setLongitude(lon)
      setLatitudeDelta(latDelta)
      setLongitudeDelta(lonDelta)
    }

    const componentWillMount = () => {
        Geolocation.getCurrentPosition(
          position => {
            const lat = position.coords.latitude
            const lon = position.coords.longitude
            const accuracy = position.coords.accuracy
            calcDelta(lat,lon,accuracy)
          }
      )
    }

    const location = componentWillMount()
    
    return (
      <>
      <Portal > 
        <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
        <View style={styles.container}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: latitude,
            longitude: longitude,
            latitudeDelta: latitudeDelta,
            longitudeDelta: longitudeDelta,
          }}
        /> 
        </View>
        </Modal>
      </Portal>
      </>
    )
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1, //the container will fill the whole screen.
      justifyContent: "flex-end",
      alignItems: "center",
      marginTop: 5,
      borderWidth: 2,
      borderColor: '#f75f6a'
    },
    map: {
      ...StyleSheet.absoluteFillObject,
      height:900
    },
  });
  