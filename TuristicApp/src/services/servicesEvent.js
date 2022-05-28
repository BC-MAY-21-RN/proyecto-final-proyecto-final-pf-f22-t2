import firestore from '@react-native-firebase/firestore';


export const createEvent = (event) => {
  return firestore()
  .collection('Events')
  .doc()
  .set({event});
};

export const getEvents = () => {
  return firestore().collection('Events').get();
};


