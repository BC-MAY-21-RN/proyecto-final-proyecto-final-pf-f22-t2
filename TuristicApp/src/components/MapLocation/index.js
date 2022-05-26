import React, {useState, useEffect} from 'react';
import { ToastAndroid, StyleSheet, View, Dimensions } from 'react-native';

import { Modal, Portal } from 'react-native-paper';
import MapView, {Marker,PROVIDER_GOOGLE} from 'react-native-maps';

import { Button } from '../../components/MyButton';

const { height } = Dimensions.get('window')

export function MapLocation({ 
  visible, 
  setVisible, 
  setLocation , 
  siteLatitude,
  siteLongitude,
  siteName,
  onSiteChange,
  setPlacePosition,  
}) {

  const containerStyle = {backgroundColor: 'white', margin: 20, height:height-100};
  const hideModal = () => setVisible(false);
    
    const confirmLocation = () => {
      setLocation(position)
      ToastAndroid.show('Saved Location', ToastAndroid.SHORT);
      setVisible(false)
    }

    const [position, setPosition] = useState({
      latitude: siteLatitude,
      longitude: siteLongitude,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    });
  
    const CustomMarker = () => {
      useEffect(() => {
        if (position && onSiteChange){
          setPlacePosition(position);
        }
      }, [position]);
      return (
        <Marker
          title={siteName}
          coordinate={{
            latitude: position.latitude,
            longitude: position.longitude,
          }}/>
      );
    };
    
    return (
      <Portal > 
        <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle} >
          <MapView
            style={styles.map}
            provider={PROVIDER_GOOGLE}
            scrollEnabled={true}
            zoomEnabled={true}
            pitchEnabled={true}
            rotateEnabled={true}
            initialRegion={position}
            showsUserLocation={true}
            onRegionChange={onSiteChange ? setPosition : undefined}
          >
         {CustomMarker()}
          </MapView>
          <View style={styles.container}>
          <View style={styles.containerButton}>
            <Button 
              text={'Save Location'}
              onPress={confirmLocation}
            />
          </View >
          <View style={styles.containerButton}>
            <Button 
              text={'Cancel'} 
              color={'gray'}
              onPress={() => setVisible(false)}
            />
          </View > 
          </View>
        </Modal>
      </Portal>
    )
  }

  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row', 
      justifyContent: "flex-end",
      alignItems: "center",
      position:'absolute',
      bottom: 10,
    },
    containerButton: {
      width: "50%",
      padding:15,
    },
    map: {
      ...StyleSheet.absoluteFillObject,
    },
  });
  