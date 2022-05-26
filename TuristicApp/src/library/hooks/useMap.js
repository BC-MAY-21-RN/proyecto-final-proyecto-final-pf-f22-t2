import Geolocation from '@react-native-community/geolocation';
import {useState, useEffect} from 'react';

export const useMap = () => {
  const [position, setPosition] = useState({});
  const [locationLoaded, setLocationLoaded] = useState(false);
  useEffect(() => {
    if (!locationLoaded) {
      const getLocation = async () => {
        return await Geolocation.getCurrentPosition(
          currentPosition => {
            setPosition({
              latitude: currentPosition.coords.latitude,
              longitude: currentPosition.coords.longitude,
            });
            setLocationLoaded(true);
          },
          null,
          {enableHighAccuracy: true, timeout: 8000, maximumAge: 3600000},
        );
      };
      getLocation();
    }
  }),
    [];
  return {position, locationLoaded, setPosition};
};