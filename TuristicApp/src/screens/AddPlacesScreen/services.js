import firestore from '@react-native-firebase/firestore';

export const createPlace = (
    placesId, 
    name,
    category, 
    keywords,
    description,
    country,
    state,
    city,
    address,
    latitude,
    longitude,
  ) => {
  return firestore()
  .collection('Places')
  .doc(placesId)
  .set({
    placesId, 
    name,
    category, 
    keywords,
    description,
    country,
    state,
    city,
    address,
    latitude,
    longitude,

  });
};

export const createService = (currentTPId, currentServiceId, service) =>{
    return firestore()
    .collection('TouristicPlace')
    .doc(currentTPId)
    .collection('Service')
    .doc(currentServiceId)
    .set(service);
}

export const getPlaces = () => {
  return firestore().collection('Places').get();
};

// Get TouristicPlace Details by id
export const getTPById = currentTPId => {
  return firestore().collection('TouristicPlace').doc(currentTPId).get();
};

// Get by currentTPId
export const getServiceByPTId = currentTPId => {
  return firestore()
    .collection('TouristicPlace')
    .doc(currentTPId)
    .collection('Service')
    .get();
};