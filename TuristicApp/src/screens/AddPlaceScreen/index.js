import React, {useState} from 'react';
import { ScrollView, ToastAndroid } from 'react-native';
import { MyText } from '../../components/MyText';
import { Button } from '../../components/MyButton';
import { Container, ContainerImage } from './styled';
import { InitImage, UploadImage } from '../../components/UploadImage';
import { FormAddPlace } from '../../components/FormAddPlace';
import { size ,isEmpty } from 'lodash'
import { createPlace } from '../../services/servicesPlace';
import { uploadImages } from '../../services/servicesImage';
import { MapLocation } from '../../components/MapLocation';
import { useMap } from '../../library/hooks/useMap';

const AddPlaceScreen = ({navigation}) => {
  const [formData, setFormData] = useState(defaultFormValues());
  const [errorName, setErrorName] = useState("");
  const [errorCategory, setErrorCategory] = useState("");
  const [errorKeywords, setErrorKeywords] = useState("");
  const [errorDescription, setErrorDescription] = useState("");
  const [errorAddress, setErrorAddress] = useState("");
  const [errorCountry, setErrorCountry] = useState("")
  const [errorState, setErrorState] = useState("");
  const [errorCity, setErrorCity] = useState("")
  const [imagesSelected, setImagesSelected] = useState([])
  const [isVisibleMap, setIsVisibleMap] = useState(false)
  const [location, setLocation] = useState(null)

  const {position, locationLoaded, setPosition} = useMap();
  
  const handlePlaceSave = async() => {
    if (validForm()) {
    
    const responseUploadImages = await uploadImages(imagesSelected, "places")
    
    const place = {
      name : formData.name,
      category : formData.category,
      keywords : formData.keywords,
      description : formData.description,
      latitude : location.latitude,
      longitude : location.longitude,
      address : formData.address,
      state : formData.state,
      city : formData.city,
      country : formData.country,
      images : responseUploadImages,
      rating : 0,
      ratingTotal : 0,
      creatAt: new Date(),
    }
    
    await createPlace(place)

    navigation.navigate('Places');

    ToastAndroid.show('Touristic Place Saved', ToastAndroid.SHORT);
    }
  }
  
  const validForm = () => {
    clearErrors()
    let isValid = true

    if (isEmpty(formData.name)){
      setErrorName("Entering Places name")
      isValid = false
    }
    if (isEmpty(formData.category)){
      setErrorCategory("Select Category")
      isValid = false
    }
    if (isEmpty(formData.keywords)){
      setErrorKeywords("Entering Places keywords")
      isValid = false
    }
    if (isEmpty(formData.description)){
      setErrorDescription("Entering Places description")
      isValid = false
    }
    if (isEmpty(formData.address)){
      setErrorAddress("Entering Places address")
      isValid = false
    }

    if (isEmpty(formData.country)){
      setErrorCountry("Entering country")
      isValid = false
    }
    if (isEmpty(formData.state)){
      setErrorState("Entering state")
      isValid = false
    }
    if (isEmpty(formData.city)){
      setErrorCity("Entering city")
      isValid = false
    }

    if(size(imagesSelected)===0){
      ToastAndroid.show("No image added", ToastAndroid.SHORT);
      isValid = false
    }

    return isValid
  }

  const clearErrors = () => {
    setErrorName(null)
    setErrorCategory(null)
    setErrorKeywords(null)
    setErrorDescription(null)
    setErrorAddress(null)
    setErrorCountry(null)
    setErrorState(null)
    setErrorCity(null)
  }

  const loadMap = () => { 
    return (
      <MapLocation
        visible={isVisibleMap} 
        setVisible={setIsVisibleMap}
        setLocation={setLocation}
        siteLatitude={position.latitude}
        siteLongitude={position.longitude}
        onSiteChange={true}
        setPlacePosition={setPosition}/>
    );
  };

  return (
    <ScrollView>
      <InitImage image={imagesSelected[0]}/>
      <Container>
        <MyText color={'#f75f6a'} size={'25px'} bold>
          Add New Places
        </MyText>
        <ContainerImage>
          <MyText bold>
            Upload Images
          </MyText>
          <UploadImage
            imagesSelected={imagesSelected}
            setImagesSelected={setImagesSelected}
            number={6}
          />
        </ContainerImage>

        <FormAddPlace
          formData={formData}
          setFormData={setFormData}
          setIsVisibleMap={setIsVisibleMap}
          errorName={errorName}
          errorCategory={errorCategory}
          errorKeywords={errorKeywords}
          errorDescription={errorDescription}
          errorAddress={errorAddress}
          errorState={errorState}
          errorCity={errorCity}
          errorCountry={errorCountry}
          location={location}
        />
          {locationLoaded ? loadMap() : undefined}
     

        <Button
          onPress={handlePlaceSave}
          text={'Save'}
        />
      </Container>
    </ScrollView>

  )
}

const defaultFormValues = () => {
  return {
    name : "",
    category : "",
    keywords  : "",
    description : "",
    latitude : "",
    longitude : "",
    address : "",
    state : "",
    city : "",
    country : "",
  }
}

export default AddPlaceScreen