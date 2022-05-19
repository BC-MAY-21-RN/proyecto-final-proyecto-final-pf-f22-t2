import firestore from '@react-native-firebase/firestore';
import { map } from 'lodash'
import storage from '@react-native-firebase/storage';

export const createPlace = (place) => {
  return firestore()
  .collection('Places')
  .doc()
  .set({place});
};

export const getPlaces = () => {
  return firestore().collection('Places').get();
};

export const uploadImages = async(imagesSelected, file) => {
  const imagesUrl = []
  await Promise.all(
    map(imagesSelected, async(image) => {
      let currentId = Math.floor(
        100000 + Math.random() * 90000,
      ).toString();
      const reference = storage().ref(`/images/${file}/${currentId}`)
      await reference.putFile(image)
      const url = await reference.getDownloadURL();
      imagesUrl.push(url)
      }
    )
  )
  return imagesUrl
}

// ----------------------------------------------

export const createService = (currentTPId, currentServiceId, service) =>{
  return firestore()
    .collection('TouristicPlace')
    .doc(currentTPId)
    .collection('Service')
    .doc(currentServiceId)
    .set(service);
}



export const getTPById = currentTPId => {
  return firestore().collection('TouristicPlace').doc(currentTPId).get();
};

export const getServiceByPTId = currentTPId => {
  return firestore()
    .collection('TouristicPlace')
    .doc(currentTPId)
    .collection('Service')
    .get();
};

