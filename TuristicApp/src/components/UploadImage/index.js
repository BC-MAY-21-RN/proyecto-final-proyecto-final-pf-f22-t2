import React from 'react';
import { Alert, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { map, size, filter } from 'lodash';
import {launchImageLibrary} from 'react-native-image-picker';
import { Container, ContainerIcon, StyledImage } from './styled';

export function InitImage({image}){
  return (
    <Image  
      source={image?{ uri: image}:require("../../assets/NO-IMAGE.png")} 
      style={{width:'100%',height:200}}
    />
  )
}

export function UploadImage({imagesSelected, setImagesSelected, number}) {
  
    const selectImage = () => {
      launchImageLibrary(
        {
          mediaType: 'photo',
        },
        ({assets}) => {
          if (assets && assets.length > 0) {
            setImagesSelected([...imagesSelected, assets[0].uri]);
          }
        },
      );
    };

    const removeImage = (image) => {
      Alert.alert(
          "Delete image",
          "Are you sure you want to delete the image?",
          [
            {
              text:"No", 
              style: "cancel"},
            {
              text: "Yes",
              onPress: () => {
                  setImagesSelected(
                      filter(imagesSelected, (imageUr) => imageUr !== image)
                  )
              }
            }
          ],
          {cancelable:true}
      )
    }

    return (
      <Container
        horizontal
      >
        {size(imagesSelected) < number && (
          <ContainerIcon onPress={selectImage}>
            <Icon name="image-outline" size={40}/> 
          </ContainerIcon>
          )
        }
        {map(imagesSelected, (image) =>  (
          <TouchableOpacity key={image} onPress={() => removeImage(image)}>
            <StyledImage source={{ uri: image}} />
          </TouchableOpacity>
        ))}
      </Container>
    )
  }