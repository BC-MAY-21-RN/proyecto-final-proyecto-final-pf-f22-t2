import firestore from '@react-native-firebase/firestore';


export const createFood = (food) => {
  return firestore()
  .collection('Foods')
  .doc()
  .set({food});
};

export const getFoods = () => {
  return firestore().collection('Foods').get();
};


