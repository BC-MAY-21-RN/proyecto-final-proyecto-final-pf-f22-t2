import { map } from 'lodash'
import storage from '@react-native-firebase/storage';

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

