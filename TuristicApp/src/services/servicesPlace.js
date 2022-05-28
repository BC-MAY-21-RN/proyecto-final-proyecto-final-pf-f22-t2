import firestore from '@react-native-firebase/firestore';

export const createPlace = (place) => {
  return firestore()
  .collection('Places')
  .doc()
  .set({place});
};

export const getPlaces = () => {
  return firestore().collection('Places').get();
};

export const updateRating = (item) => {
  let newRating = item.place.rating
  newRating++
  return firestore()
    .collection('Places')
    .doc(item.id)
    .update({ 'place.rating': newRating })
};
